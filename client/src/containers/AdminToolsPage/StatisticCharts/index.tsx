import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RootState } from 'redux/rootReducer';

import UserSetupCount from './UserSetupCount';
import UserActivity from './UserActivity';
import UsingHardwareChart from './MostUsedHardware';

import * as actions from './action';
import { StatisticRequestActionTypes, StatisticState, StatisticRequestActions } from './actionTypes';
import styles from './styles.module.scss';
import { TypeUserStatistic, TypeHarwareStatistic } from 'common/models/typeStatistic';

interface IStatisticChartsContainer {
  state: StatisticState;
  getStatisticMostActiveUsers: () => StatisticRequestActions;
  getStatisticMostUsedHardware: () => StatisticRequestActions;
}
export interface IChartData {
  name: string;
  value: number;
}

const StatisticCharts = (props: IStatisticChartsContainer): JSX.Element => {
  const { getStatisticMostUsedHardware, getStatisticMostActiveUsers } = props;
  const filteredUserDate: IChartData[] = [];
  const filteredHardwareDate: IChartData[] = [];
  const TOPMAXCOUNT = 5;

  useEffect(() => {
    getStatisticMostUsedHardware();
    getStatisticMostActiveUsers();
  }, []);

  const compare = (a: TypeUserStatistic | TypeHarwareStatistic, b: TypeUserStatistic | TypeHarwareStatistic) => {
    if (a.setupsCount < b.setupsCount) return 1;
    if (a.setupsCount > b.setupsCount) return -1;
    return 0;
  };

  // normalize data for user Chart
  if (props.state.userStatisticList) {
    const sortedUserDate = props.state.userStatisticList.sort(compare);
    const topCount = sortedUserDate.length > TOPMAXCOUNT ? TOPMAXCOUNT : sortedUserDate.length;
    if (sortedUserDate.length) {
      for (let i = 0; i < topCount; i++) {
        filteredUserDate.push({ name: sortedUserDate[i].user.name, value: sortedUserDate[i].setupsCount });
      }
      if (sortedUserDate.length > topCount) {
        let otherCount = 0;
        for (let i = topCount; i < sortedUserDate.length; i++) {
          otherCount += sortedUserDate[i].setupsCount;
        }
        if (otherCount) {
          filteredUserDate.push({ name: 'other', value: otherCount });
        }
      }
    }
  }

  // normalize data for user Chart
  if (props.state.hardwareStatisticList) {
    const sortedHardWareDate = props.state.hardwareStatisticList.sort(compare);
    const topCount = sortedHardWareDate.length > TOPMAXCOUNT ? TOPMAXCOUNT : sortedHardWareDate.length;
    if (sortedHardWareDate.length) {
      for (let i = 0; i < topCount; i++) {
        filteredHardwareDate.push({
          name: sortedHardWareDate[i].hardware.name.substr(0, 15),
          value: sortedHardWareDate[i].setupsCount,
        });
      }
      if (sortedHardWareDate.length > topCount) {
        let otherCount = 0;
        for (let i = topCount; i < sortedHardWareDate.length; i++) {
          otherCount += sortedHardWareDate[i].setupsCount;
        }
        if (otherCount) filteredHardwareDate.push({ name: 'other', value: otherCount });
      }
    }
  }

  return (
    <div>
      <h2>Statistic Reports</h2>
      <div className={styles.chartWrapper}>
        <div>
          <div className={styles.chartHeader}>User Activity of Creating Setups</div>
          <UserSetupCount dataList={filteredUserDate} />
        </div>
        <div>
          <div className={styles.chartHeader}>Using most popular harware in setups</div>
          <UsingHardwareChart dataList={filteredHardwareDate} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  state: state.statistic,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(StatisticCharts);
