import React, { ReactElement } from 'react';
import AdminStatisticReport, {
  IHardwareRateStatistic,
  IHardwareUsingStatistic,
  IHardwareCommentsStatistic,
} from 'components/ChartComponents/AdminStatisticChart';
import styles from './styles.module.scss';

export const StatisticCharts = (): JSX.Element => {
  const hardwareRatingList: IHardwareRateStatistic[] = [
    {
      name: 'coolHW 1',
      rateValue: 5,
    },
    {
      name: 'coolHW 2',
      rateValue: 4.7,
    },
    {
      name: 'coolHW 3',
      rateValue: 4.5,
    },
  ];
  const hardwareUsingList: IHardwareUsingStatistic[] = [
    {
      name: 'coolHW 11',
      countOfUsingInSetups: 9,
    },
    {
      name: 'coolHW 12',
      countOfUsingInSetups: 9,
    },
    {
      name: 'coolHW 13',
      countOfUsingInSetups: 5,
    },
  ];
  const hardwareCommentList: IHardwareCommentsStatistic[] = [
    {
      name: 'coolHW 21',
      countOfComments: 60,
    },
    {
      name: 'coolHW 22',
      countOfComments: 57,
    },
    {
      name: 'coolHW 23',
      countOfComments: 43,
    },
  ];

  return (
    <div>
      <h2>Statistic Reports</h2>
      <AdminStatisticReport
        chartName={'Hardwares'}
        hardwareRatingList={hardwareRatingList}
        hardwareUsingList={hardwareUsingList}
        hardwareCommentList={hardwareCommentList}
      />
    </div>
  );
};

export default StatisticCharts;
