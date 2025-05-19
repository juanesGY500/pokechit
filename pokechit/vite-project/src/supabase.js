import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zymahcrkdztruismustz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5bWFoY3JrZHp0cnVpc211c3R6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2ODM2OTIsImV4cCI6MjA2MzI1OTY5Mn0.Ogu0o5lLSTAbp69lGvgsBfWEyzWGmBMnIMUnra4bf30';
export const supabase = createClient(supabaseUrl, supabaseKey);