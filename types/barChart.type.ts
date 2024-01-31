export type StackedBarChart = {
  stacks: { value: number; color: string }[];
  label: string;
  topLabelComponent: () => JSX.Element;
}[];

export type BarChartType = {
  value: number;
  label: string;
  frontColor: string;
  topLabelComponent: () => JSX.Element;
}[];
