export type MonthlySpent = Record<
  string,
  { spending: { date: string; spent: number }[] }
>;
