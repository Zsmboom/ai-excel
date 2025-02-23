import { GA4 } from 'ga-4-react';

class Analytics {
  private static instance: Analytics;
  private ga4: GA4 | null = null;
  private retryCount = 0;
  private maxRetries = 3;
  private retryDelay = 1000; // 1秒

  private constructor() {
    this.initGA();
  }

  public static getInstance(): Analytics {
    if (!Analytics.instance) {
      Analytics.instance = new Analytics();
    }
    return Analytics.instance;
  }

  private async initGA() {
    try {
      this.ga4 = new GA4('G-N24H0824RF');
    } catch (error) {
      console.error('Failed to initialize GA4:', error);
      if (this.retryCount < this.maxRetries) {
        this.retryCount++;
        setTimeout(() => this.initGA(), this.retryDelay * this.retryCount);
      }
    }
  }

  public async pageView(path: string, title: string) {
    try {
      if (!this.ga4) {
        throw new Error('GA4 not initialized');
      }
      await this.ga4.pageview(path, title);
    } catch (error) {
      console.error('Failed to send pageview:', error);
      // 存储失败的事件，稍后重试
      this.queueFailedEvent('pageview', { path, title });
    }
  }

  public async event(category: string, action: string, label?: string, value?: number) {
    try {
      if (!this.ga4) {
        throw new Error('GA4 not initialized');
      }
      await this.ga4.event(category, action, label, value);
    } catch (error) {
      console.error('Failed to send event:', error);
      // 存储失败的事件，稍后重试
      this.queueFailedEvent('event', { category, action, label, value });
    }
  }

  private queueFailedEvent(type: string, data: any) {
    const failedEvents = JSON.parse(localStorage.getItem('failedAnalyticsEvents') || '[]');
    failedEvents.push({ type, data, timestamp: Date.now() });
    localStorage.setItem('failedAnalyticsEvents', JSON.stringify(failedEvents));
  }

  public retryFailedEvents() {
    const failedEvents = JSON.parse(localStorage.getItem('failedAnalyticsEvents') || '[]');
    if (failedEvents.length === 0) return;

    failedEvents.forEach(async (event: any) => {
      if (event.type === 'pageview') {
        await this.pageView(event.data.path, event.data.title);
      } else if (event.type === 'event') {
        await this.event(
          event.data.category,
          event.data.action,
          event.data.label,
          event.data.value
        );
      }
    });

    localStorage.removeItem('failedAnalyticsEvents');
  }
}

export const analytics = Analytics.getInstance(); 