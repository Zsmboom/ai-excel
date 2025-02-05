import { kv } from '@vercel/kv';
import { nanoid } from 'nanoid';
import type { ToolUsageStats, ToolStats, DailyStats } from '../types/storage';

export type ToolType = ToolUsageStats['tool_type'];

// 记录工具使用
export async function recordToolUsage(toolType: ToolType, userId?: string) {
  try {
    const stat: ToolUsageStats = {
      id: nanoid(),
      tool_type: toolType,
      user_id: userId || null,
      created_at: new Date().toISOString()
    };

    // 使用 Vercel KV 存储统计数据
    // 使用 list 结构存储所有统计记录
    await kv.lpush('tool_usage_stats', JSON.stringify(stat));

    // 使用 set 结构存储用户 ID，用于计算独立用户数
    if (userId) {
      await kv.sadd(`tool_users:${toolType}`, userId);
    }

  } catch (error) {
    console.error('Error recording tool usage:', error);
  }
}

// 获取总体统计数据
export async function getOverallStats(): Promise<ToolStats[]> {
  try {
    const toolTypes: ToolType[] = ['generator', 'functions', 'pic-to-excel'];
    const stats: ToolStats[] = [];

    for (const toolType of toolTypes) {
      // 获取所有统计记录
      const allStats = await kv.lrange<string>('tool_usage_stats', 0, -1);
      const toolStats = allStats
        .map(stat => JSON.parse(stat) as ToolUsageStats)
        .filter(stat => stat.tool_type === toolType);

      // 获取独立用户数
      const uniqueUsers = await kv.scard(`tool_users:${toolType}`);

      // 处理每日数据
      const dailyStats: DailyStats[] = [];
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

      for (let i = 0; i < 30; i++) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        const dateStr = date.toISOString().split('T')[0];

        const dayStats = toolStats.filter(
          stat => stat.created_at.split('T')[0] === dateStr
        );

        const dayUsers = new Set(
          dayStats
            .map(stat => stat.user_id)
            .filter((id): id is string => id !== null)
        );

        dailyStats.push({
          date: dateStr,
          total_users: dayUsers.size,
          total_usage: dayStats.length
        });
      }

      stats.push({
        tool_type: toolType,
        total_users: uniqueUsers,
        total_usage: toolStats.length,
        daily_stats: dailyStats.reverse()
      });
    }

    return stats;
  } catch (error) {
    console.error('Error getting stats:', error);
    return [];
  }
} 
