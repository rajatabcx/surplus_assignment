import { DailyAverageSpent } from '../components/DailyAverageSpent';
import { MonthlySpending } from '../components/MonthlySpending';
import { TopCategories } from '../components/TopCategories';
import { AverageSpent } from '../types/averageSpent.type';
import { GraphCarousel } from '../types/graphCarousel.type';
import { MonthlySpent } from '../types/monthlySpent.type';
import { TopCategories as TopCategoriesType } from '../types/topCategories.type';

export const averageSpentData: AverageSpent = {
  'Jan 2021': {
    averageSpent: 50,
    spending: [
      { date: '1-7 Jan', spent: 45 },
      { date: '8-14 Jan', spent: 25 },
      { date: '15-21 Jan', spent: 10 },
      { date: 'This Week', spent: 38 },
    ],
  },
  'Feb 2021': {
    averageSpent: 80,
    spending: [
      { date: '1-7 Feb', spent: 20 },
      { date: '8-14 Feb', spent: 45 },
      { date: '15-21 Feb', spent: 25 },
      { date: 'This Week', spent: 60 },
    ],
  },
  'Mar 2021': {
    averageSpent: 100,
    spending: [
      { date: '1-7 Mar', spent: 82 },
      { date: '8-14 Mar', spent: 35 },
      { date: '15-21 Mar', spent: 55 },
      { date: 'This Week', spent: 95 },
    ],
  },
};

export const topCategoriesData: TopCategoriesType = [
  { name: 'Transport', allocatedAmount: 3214, usedUpAmount: 1000 },
  { name: 'Entertainment', allocatedAmount: 24, usedUpAmount: 20 },
  { name: 'Electronics', allocatedAmount: 541, usedUpAmount: 65 },
  { name: 'Food & Drinks', allocatedAmount: 414, usedUpAmount: 100 },
  { name: 'Travel', allocatedAmount: 1000, usedUpAmount: 800 },
];

export const monthlySpendingData: MonthlySpent = {
  Jan: {
    spending: [
      {
        date: 'Week 1',
        spent: 46,
      },
      {
        date: 'Week 2',
        spent: 31,
      },
      {
        date: 'Week 3',
        spent: 43,
      },
      {
        date: 'Week 4',
        spent: 4,
      },
    ],
  },
  Feb: {
    spending: [
      {
        date: 'Week 1',
        spent: 13,
      },
      {
        date: 'Week 2',
        spent: 26,
      },
      {
        date: 'Week 3',
        spent: 45,
      },
      {
        date: 'Week 4',
        spent: 3,
      },
    ],
  },
  Mar: {
    spending: [
      {
        date: 'Week 1',
        spent: 7,
      },
      {
        date: 'Week 2',
        spent: 26,
      },
      {
        date: 'Week 3',
        spent: 17,
      },
      {
        date: 'Week 4',
        spent: 15,
      },
    ],
  },
  Apr: {
    spending: [
      {
        date: 'Week 1',
        spent: 8,
      },
      {
        date: 'Week 2',
        spent: 20,
      },
      {
        date: 'Week 3',
        spent: 40,
      },
      {
        date: 'Week 4',
        spent: 4,
      },
    ],
  },
  May: {
    spending: [
      {
        date: 'Week 1',
        spent: 10,
      },
      {
        date: 'Week 2',
        spent: 37,
      },
      {
        date: 'Week 3',
        spent: 7,
      },
      {
        date: 'Week 4',
        spent: 47,
      },
    ],
  },
  Jun: {
    spending: [
      {
        date: 'Week 1',
        spent: 20,
      },
      {
        date: 'Week 2',
        spent: 23,
      },
      {
        date: 'Week 3',
        spent: 40,
      },
      {
        date: 'Week 4',
        spent: 1,
      },
    ],
  },
  Jul: {
    spending: [
      {
        date: 'Week 1',
        spent: 39,
      },
      {
        date: 'Week 2',
        spent: 16,
      },
      {
        date: 'Week 3',
        spent: 9,
      },
      {
        date: 'Week 4',
        spent: 29,
      },
    ],
  },
  Aug: {
    spending: [
      {
        date: 'Week 1',
        spent: 39,
      },
      {
        date: 'Week 2',
        spent: 29,
      },
      {
        date: 'Week 3',
        spent: 9,
      },
      {
        date: 'Week 4',
        spent: 41,
      },
    ],
  },
  Sep: {
    spending: [
      {
        date: 'Week 1',
        spent: 15,
      },
      {
        date: 'Week 2',
        spent: 44,
      },
      {
        date: 'Week 3',
        spent: 46,
      },
      {
        date: 'Week 4',
        spent: 1,
      },
    ],
  },
  Oct: {
    spending: [
      {
        date: 'Week 1',
        spent: 42,
      },
      {
        date: 'Week 2',
        spent: 44,
      },
      {
        date: 'Week 3',
        spent: 18,
      },
      {
        date: 'Week 4',
        spent: 26,
      },
    ],
  },
  Nov: {
    spending: [
      {
        date: 'Week 1',
        spent: 47,
      },
      {
        date: 'Week 2',
        spent: 9,
      },
      {
        date: 'Week 3',
        spent: 4,
      },
      {
        date: 'Week 4',
        spent: 6,
      },
    ],
  },
  Dec: {
    spending: [
      {
        date: 'Week 1',
        spent: 21,
      },
      {
        date: 'Week 2',
        spent: 22,
      },
      {
        date: 'Week 3',
        spent: 26,
      },
      {
        date: 'Week 4',
        spent: 30,
      },
    ],
  },
};

export const graphCarouselData: GraphCarousel = [
  {
    Component: <DailyAverageSpent data={averageSpentData} />,
  },
  {
    Component: <MonthlySpending data={monthlySpendingData} />,
  },
  {
    Component: <TopCategories data={topCategoriesData} />,
  },
];
