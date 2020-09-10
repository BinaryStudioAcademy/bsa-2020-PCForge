import React from 'react';
import UserSetupCount from './UserSetupCount';
import UserActivity from './UserActivity';
import UsingHardwareChart from './MostUsedHardware';
import MostLikedUsedHardware from './MostLikedUsedHardware';

import styles from './styles.module.scss';

export const StatisticCharts = (): JSX.Element => {
  return (
    <div>
      <h2>Statistic Reports</h2>

      <div className={styles.chartWrapper}>
        <div>
          <div className={styles.chartHeader}>User Activity of Creating Setups</div>
          <UserSetupCount />
        </div>
        <div>
          <div className={styles.chartHeader}>Using most popular harware in setups</div>
          <UsingHardwareChart />
        </div>
      </div>
      <div>Total user Activity on site</div>
      <div className={styles.chartContainerWrapper}>
        <UserActivity />
      </div>
    </div>
  );
};
export default StatisticCharts;
