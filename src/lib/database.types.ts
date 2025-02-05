export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          avatar_url: string | null;
          last_login: string;
          created_at: string;
        };
        Insert: {
          id: string;
          email: string;
          full_name?: string | null;
          avatar_url?: string | null;
          last_login?: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          full_name?: string | null;
          avatar_url?: string | null;
          last_login?: string;
          created_at?: string;
        };
      };
      subscriptions: {
        Row: {
          id: string;
          user_id: string;
          plan_type: string;
          start_date: string;
          end_date: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          plan_type: string;
          start_date?: string;
          end_date?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          plan_type?: string;
          start_date?: string;
          end_date?: string | null;
          created_at?: string;
        };
      };
      tool_usage_stats: {
        Row: {
          id: string;
          tool_type: string;  // 'generator' | 'functions' | 'pic-to-excel'
          user_id: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          tool_type: string;
          user_id?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          tool_type?: string;
          user_id?: string | null;
          created_at?: string;
        };
      };
    };
  };
}