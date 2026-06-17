-- =============================================================================
-- Allow anonymous INSERT on newsletter_subscribers
-- RLS is enabled but no INSERT policy existed — this fixes the silent failure.
-- Safe to re-run (CREATE POLICY IF NOT EXISTS).
-- =============================================================================

-- Allow anyone to subscribe (INSERT)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE tablename = 'newsletter_subscribers'
      AND policyname = 'Allow public newsletter signup'
  ) THEN
    EXECUTE 'CREATE POLICY "Allow public newsletter signup"
      ON newsletter_subscribers
      FOR INSERT
      WITH CHECK (true)';
  END IF;
END $$;

-- Allow anyone to read their own row (optional but clean)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE tablename = 'newsletter_subscribers'
      AND policyname = 'Allow public newsletter read'
  ) THEN
    EXECUTE 'CREATE POLICY "Allow public newsletter read"
      ON newsletter_subscribers
      FOR SELECT
      USING (true)';
  END IF;
END $$;
