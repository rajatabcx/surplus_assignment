export type AverageSpent = Record<
  string,
  { averageSpent: number; spending: { spent: number; date: string }[] }
>;
