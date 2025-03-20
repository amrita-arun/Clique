import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://yccueukpylmgrmnkgizn.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljY3VldWtweWxtZ3JtbmtnaXpuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI0MzEyNzUsImV4cCI6MjA1ODAwNzI3NX0.KxOTldksVRjH752fLVGc_hqpxZYjKVQw0i2URIEh5JI";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
