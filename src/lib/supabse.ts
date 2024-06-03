import { createClient } from '@supabase/supabase-js'
import Constants from 'expo-constants';
import { Database } from '../db_types';

const supabaseUrl = Constants?.expoConfig?.extra?.supabaseUrl;
const supabaseKey = Constants?.expoConfig?.extra?.supabaseKey;

export const supabase = createClient<Database>(supabaseUrl, supabaseKey);