import { createClient } from '@supabase/supabase-js'

const URL = 'https://zgwogrqbsfiqsxtvrbkr.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpnd29ncnFic2ZpcXN4dHZyYmtyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4MjM5MzIsImV4cCI6MjA2MDM5OTkzMn0.a8avPlfSXu4ga4gJ3DstLDCk-l5qK65kknwh0aO9QEA';

export const supabase = createClient(URL, API_KEY);