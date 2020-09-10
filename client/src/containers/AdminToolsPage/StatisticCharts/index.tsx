import React from 'react';
import UserSetupCount from './UserSetupCount';
import MostLikedUsedHardware from './MostLikedUsedHardware';

import styles from './styles.module.scss';

export const StatisticCharts = (): JSX.Element => {
  return (
    <div>
      <h2>Statistic Reports</h2>
      <UserSetupCount />
      <MostLikedUsedHardware />
    </div>
  );
};
export default StatisticCharts;
