/** HealthWallet backend, shared with the mobile app.
 *
 * The anon key is meant to ship in clients: every table and function is
 * guarded by row-level security and SECURITY DEFINER checks in
 * `supabase/migrations/`. Never put the service-role key here.
 *
 * Keep these in step with `lib/config/supabase_config.dart` and
 * `lib/config/pricing.dart` in the app repository.
 */
export const backend = {
  url: 'https://nmpzkyrhlfmzqecbjgdl.supabase.co',
  anonKey:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5tcHpreXJobGZtenFlY2JqZ2RsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM2OTgxMTYsImV4cCI6MjA5OTI3NDExNn0.MnZtO-oQocXyt0zUsEPIbVJWrCgJrqEs3IIsDRq2iE8',
} as const;

export type Plan = {
  months: number;
  amount: number;
  label: string;
  note?: string;
};

/** Must match `_fib_price()` in migration 00018 — the server prices the plan.
 *  What is shown here is only a label; the amount charged comes from the server. */
export const plans: readonly Plan[] = [
  { months: 1, amount: 5000, label: '1 month' },
  { months: 6, amount: 20000, label: '6 months', note: 'Save 10,000 IQD' },
  { months: 12, amount: 30000, label: '12 months', note: 'Best value' },
];

export const formatIqd = (amount: number) =>
  `${amount.toLocaleString('en-US')} IQD`;
