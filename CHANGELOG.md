# Changelog

所有关于 ExcelEasy 项目的重要变更都将记录在此文件中。

格式基于 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.0.0/)，
并且本项目遵循 [语义化版本](https://semver.org/lang/zh-CN/)。

## [1.0.0] - 2025-02-24

### 新增
- Google OAuth 登录功能
  - 支持用户通过 Google 账号登录
  - 获取用户基本信息（邮箱、姓名、头像）
  - 安全的 token 处理机制
  - 离线访问支持（refresh token）
  - 用户登录状态管理
- 多语言支持框架
  - 支持英语（默认）
  - 支持中文
  - 支持韩语
  - 支持德语
  - 支持印地语
  - 语言切换无刷新实现
  - 多语言 URL 结构（/[language]/[feature-name]）
- SEO 优化
  - 动态生成的 sitemap.xml
  - 多语言 URL 结构
  - 搜索引擎友好的 URL 设计
  - 自动生成 hreflang 标签
  - x-default 语言设置
  - 每日/每周/每月更新频率设置
  - 页面优先级设置
- 后端服务
  - Express.js 服务器
  - CORS 安全配置
  - 环境变量管理
  - 安全的 API 路由设计
  - 错误处理机制
- 基础页面结构
  - 首页
  - AI Excel 生成器页面
  - AI Excel 图表页面
  - 博客页面
  - 联系我们页面
  - 关于我们页面
  - 隐私政策页面
  - 服务条款页面

### 技术栈
- 前端：Next.js
- 后端：Express.js
- 认证：Google OAuth 2.0
- 多语言：i18n
- 类型系统：TypeScript
- API：Google APIs (oauth2)

### 安全性
- 实现了环境变量配置
- OAuth 密钥安全存储
- CORS 策略配置
- 敏感信息日志脱敏
- 安全的回调处理机制 