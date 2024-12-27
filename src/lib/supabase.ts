import { createClient } from '@supabase/supabase-js';
import { Database } from './database.types';
import { getEnvVars } from '../config/env';

const { supabaseUrl, supabaseAnonKey } = getEnvVars();

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);