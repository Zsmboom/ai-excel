// Client-side storage implementation using localStorage
export interface User {
  id: string;
  email: string;
  fullName: string | null;
  avatarUrl: string | null;
  lastLogin: string;
  createdAt: string;
}

export interface Subscription {
  id: string;
  userId: string;
  planType: string;
  startDate: string;
  endDate: string | null;
  createdAt: string;
}

export const storage = {
  // User operations
  async getUser(id: string): Promise<User | null> {
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    return users[id] || null;
  },

  async createUser(user: User): Promise<void> {
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    users[user.id] = user;
    localStorage.setItem('users', JSON.stringify(users));
  },

  async updateUser(id: string, data: Partial<User>): Promise<void> {
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    if (users[id]) {
      users[id] = { ...users[id], ...data };
      localStorage.setItem('users', JSON.stringify(users));
    }
  },

  // Subscription operations
  async getSubscription(userId: string): Promise<Subscription | null> {
    const subscriptions = JSON.parse(localStorage.getItem('subscriptions') || '{}');
    return subscriptions[userId] || null;
  },

  async createSubscription(subscription: Subscription): Promise<void> {
    const subscriptions = JSON.parse(localStorage.getItem('subscriptions') || '{}');
    subscriptions[subscription.userId] = subscription;
    localStorage.setItem('subscriptions', JSON.stringify(subscriptions));
  },

  async updateSubscription(userId: string, data: Partial<Subscription>): Promise<void> {
    const subscriptions = JSON.parse(localStorage.getItem('subscriptions') || '{}');
    if (subscriptions[userId]) {
      subscriptions[userId] = { ...subscriptions[userId], ...data };
      localStorage.setItem('subscriptions', JSON.stringify(subscriptions));
    }
  }
};