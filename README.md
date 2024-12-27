# ExcelEasy

AI-powered Excel spreadsheet generator built with React and Supabase.

## Setup Instructions

1. Clone the repository
```bash
git clone https://github.com/your-username/excelearn.git
cd excelearn
```

2. Install dependencies
```bash
npm install
```

3. Configure environment variables
- Copy `.env.example` to `.env`
- Update the Supabase configuration in `.env`:
  ```
  VITE_SUPABASE_URL=your-supabase-url
  VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
  ```

4. Start the development server
```bash
npm run dev
```

## Database Setup

1. Create a new project in [Supabase](https://supabase.com)
2. Go to the SQL editor in your Supabase dashboard
3. Run the migration script from `supabase/migrations/0001_billowing_boat.sql`
4. Configure authentication:
   - Enable Google OAuth in Authentication > Providers
   - Add your Google OAuth credentials
   - Configure allowed redirect URLs

## Deployment

1. Create a new repository on GitHub
2. Push your code:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/excelearn.git
git push -u origin main
```

3. Set up environment variables in your hosting platform:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`