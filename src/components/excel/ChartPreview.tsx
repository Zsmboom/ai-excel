import React, { useMemo, useRef, forwardRef, useImperativeHandle } from 'react';
import ReactECharts from 'echarts-for-react';
import type { ChartConfig } from '../../types/excel';
import type { EChartsInstance } from 'echarts-for-react';

interface ChartPreviewProps {
  config: ChartConfig;
  chartType: 'bar' | 'line' | 'pie' | 'scatter';
}

export interface ChartPreviewRef {
  getEchartsInstance: () => EChartsInstance | undefined;
}

export const ChartPreview = forwardRef<ChartPreviewRef, ChartPreviewProps>(({ config, chartType }, ref) => {
  const chartRef = useRef<ReactECharts>(null);

  useImperativeHandle(ref, () => ({
    getEchartsInstance: () => chartRef.current?.getEchartsInstance()
  }));

  const option = useMemo(() => {
    const baseOption = {
      title: {
        text: config.title,
        left: 'center'
      },
      tooltip: {
        trigger: chartType === 'pie' ? 'item' : 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        top: '10%',
        orient: 'horizontal',
        left: 'center'
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '20%',
        containLabel: true
      }
    };

    if (chartType === 'pie') {
      return {
        ...baseOption,
        series: [{
          name: config.series[0].name,
          type: 'pie',
          radius: '50%',
          data: config.xAxis.data.map((name, index) => ({
            name,
            value: config.series[0].data[index]
          })),
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }]
      };
    }

    if (chartType === 'scatter') {
      return {
        ...baseOption,
        xAxis: {
          type: 'value',
          name: config.xAxis.title,
          nameLocation: 'middle',
          nameGap: 30
        },
        yAxis: {
          type: 'value',
          name: config.yAxis.title,
          nameLocation: 'middle',
          nameGap: 30
        },
        series: config.series.map(series => ({
          name: series.name,
          type: 'scatter',
          data: series.data.map((value, index) => [config.xAxis.data[index], value])
        }))
      };
    }

    // bar 和 line 图表的配置
    return {
      ...baseOption,
      xAxis: {
        type: 'category',
        data: config.xAxis.data,
        name: config.xAxis.title,
        nameLocation: 'middle',
        nameGap: 30
      },
      yAxis: {
        type: 'value',
        name: config.yAxis.title,
        nameLocation: 'middle',
        nameGap: 30
      },
      series: config.series.map(series => ({
        name: series.name,
        type: chartType,
        data: series.data,
        label: {
          show: true,
          position: 'top'
        }
      }))
    };
  }, [config, chartType]);

  return (
    <div className="w-full h-[500px]">
      <ReactECharts
        ref={chartRef}
        option={option}
        style={{ height: '100%', width: '100%' }}
        opts={{ renderer: 'canvas' }}
      />
    </div>
  );
});

ChartPreview.displayName = 'ChartPreview'; 