import { roundToNearest } from 'common/helpers/math.helper';
import { Cpu } from 'common/models/cpu';
import { Gpu } from 'common/models/gpu';
import { IReport } from 'common/models/setupPerformance';
import Tooltip from '@material-ui/core/Tooltip';
import React, { useState } from 'react';
import sharedStyles from '../styles.module.scss';
import styles from './styles.module.scss';

interface IRequirement {
  item1: number;
  item2: number;
  item3: number;
}

interface UIMark {
  id: number;
  title: string;
}

export interface IHardwareRateStatistic {
  name: string;
  rateValue: number;
}
export interface IHardwareUsingStatistic {
  name: string;
  countOfUsingInSetups: number;
}
export interface IHardwareCommentsStatistic {
  name: string;
  countOfComments: number;
}

interface Props {
  /*cpu: Cpu;
  gpu: Gpu;
  ramSize: number;
  report: IReport;*/
  chartName: string;
  hardwareRatingList: IHardwareRateStatistic[];
  hardwareUsingList: IHardwareUsingStatistic[];
  hardwareCommentList: IHardwareCommentsStatistic[];
}

//const AdminStatisticReport: React.FC<Props> = ({ cpu, gpu, ramSize, report }): JSX.Element => {
const AdminStatisticReport: React.FC<Props> = ({
  chartName,
  hardwareRatingList,
  hardwareUsingList,
  hardwareCommentList,
}): JSX.Element => {
  const hardware1_countOfUsing = 30;
  const hardware2_countOfUsing = 40;
  const hardware3_countOfUsing = 50;

  const BY_RATING_ID = 1;
  const BY_USING_IN_SETUPS_ID = 2;
  const BY_COUNT_OF_COMMENT_ID = 3;

  /*const MAX_RATE_VALUE = Math.max(
    roundToNearest(hardwareRatingList[0].rateValue, 5),
    roundToNearest(hardwareRatingList[1].rateValue, 5),
    roundToNearest(hardwareRatingList[2].rateValue, 5),
  );*/
  const MAX_RATE_VALUE = 5;
  const MAX_USING_VALUE = Math.max(
    hardwareUsingList[0].countOfUsingInSetups,
    hardwareUsingList[1].countOfUsingInSetups,
    hardwareUsingList[2].countOfUsingInSetups
  );
  /*const MAX_USING_VALUE = Math.max(
    roundToNearest(hardwareUsingList[0].countOfUsingInSetups, 100),
    roundToNearest(hardwareUsingList[1].countOfUsingInSetups, 100),
    roundToNearest(hardwareUsingList[2].countOfUsingInSetups, 100),
  );*/
  const MAX_COMMENT_VALUE = Math.max(
    hardwareCommentList[0].countOfComments,
    hardwareCommentList[1].countOfComments,
    hardwareCommentList[2].countOfComments
  );

  const MAXIMUM_REPORT_VALUE = Math.max(MAX_COMMENT_VALUE, MAX_USING_VALUE);
  const REPORT_USING_STEP = roundToNearest(MAX_USING_VALUE / 10, 1);
  const REPORT_COUNTING_STEP = roundToNearest(MAX_COMMENT_VALUE / 10, 1); //roundToNearest(MAX_COMMENT_VALUE / 10, 10);
  const REPORT_RATING_STEP = roundToNearest(MAX_RATE_VALUE / 10, 0.1);
  const [selectedMark, setSelectedMark] = useState<number>(BY_RATING_ID);

  const valuesRating = [];
  for (let i = 0.5; i <= MAX_RATE_VALUE; i += REPORT_RATING_STEP) {
    valuesRating.push(i);
  }
  const valuesUsing = [];
  for (let i = 0; i < MAX_USING_VALUE + REPORT_USING_STEP; i += REPORT_USING_STEP) {
    valuesUsing.push(i);
  }
  const valuesCounting = [];
  for (let i = 0; i < MAX_COMMENT_VALUE + REPORT_COUNTING_STEP; i += REPORT_COUNTING_STEP) {
    valuesCounting.push(i);
  }
  const requirements: UIMark[] = [
    { id: 1, title: 'By rating' },
    { id: 2, title: 'By count of using in setups' },
    { id: 3, title: 'By count of comments' },
  ];

  /*const componentItems = [
    { title: 'Processor', description: cpu.name },
    { title: 'Graphics', description: gpu.name },
    { title: 'RAM', description: `${ramSize}GB` },
  ];*/

  const getRequirementDiagram = (req: UIMark) => {
    const isActive = req.id === selectedMark;

    return (
      <div className={styles.requirementVariant} key={req.id} onClick={() => setSelectedMark(req.id)}>
        <div className={[sharedStyles.circle, isActive ? sharedStyles.activeCircle : ''].join(' ')}></div>
        <span className={styles.requirementText}>{req.title}</span>
      </div>
    );
  };

  /*const getScaledWidth = (width: number): number => {
    const totalSteps = MAXIMUM_REPORT_VALUE / REPORT_STEP;
    const currentStep = width / REPORT_STEP;
    return (currentStep / totalSteps) * 100;
  };*/
  const getScaledWidth = (width: number, maxValue: number): number => {
    //const totalSteps = MAX_RATE_VALUE / REPORT_RATING_STEP;
    const currentWidth = (width * 100) / maxValue; //MAX_RATE_VALUE;
    return currentWidth;
  };

  const getPerformanceIndicator = (name: string, value: number, maxValue: number) => (
    <div className={styles.performanceGraphItem} key={name}>
      <span className={styles.performanceIndicatorHeader}>{name}</span>
      <div className={styles.performanceGraphCentralLine}></div>
      <Tooltip title={value} placement="right-start" arrow>
        <div className={styles.performanceIndicator} style={{ width: getScaledWidth(value, maxValue) + '%' }}></div>
      </Tooltip>
    </div>
  );

  const getPerformanceIndicators = (
    hardwareList: IHardwareRateStatistic[] | IHardwareUsingStatistic[] | IHardwareCommentsStatistic[],
    MaxValue: number
  ) => {
    const percents = (100 / MAX_RATE_VALUE) * 100;
    let additionalPixels = '+ 0px';
    // we must add or remove pixels because we have margins. So, with margins left: 0% move orl line out of the graph. The same with left: 100%
    if (percents < 50) additionalPixels = '+ 30px';
    if (percents > 50) additionalPixels = '- 30px';

    const chartValues = (hardwareList as Array<
      IHardwareRateStatistic | IHardwareUsingStatistic | IHardwareCommentsStatistic
    >).map((temp) => {
      if ('rateValue' in temp) return temp.rateValue;
      if ('countOfUsingInSetups' in temp) return temp.countOfUsingInSetups;
      if ('countOfComments' in temp) return temp.countOfComments;
    });
    console.log(chartValues);
    return (
      <div className={styles.graphWrapper}>
        <div className={styles.indicatorsWrapper}>
          <div className={styles.normalLine} style={{ left: `calc(${percents}% ${additionalPixels})` }}>
            {/* <div className={styles.normalLineText}>100%</div> */}
          </div>
          <>
            {chartValues.map((value, key) =>
              value ? <div key={key}>{getPerformanceIndicator(hardwareList[key].name, value, MaxValue)}</div> : null
            )}
          </>
          {/* {chartValues[0] ? (
            <>
            {getPerformanceIndicator(hardwareList[0].name, chartValues[0])}
            </>
          ) : null}
          {chartValues[1] ? (
            <>
            {getPerformanceIndicator(hardwareList[1].name, chartValues[1])}
            </>
          ) : null}
          {chartValues[2] ? (
            <>
            {getPerformanceIndicator(hardwareList[0].name, chartValues[2])}
            </>
          ) : null} */}
        </div>
      </div>
    );
  };

  console.log(selectedMark);

  return (
    <section>
      <h3>{chartName}</h3>
      <div className={styles.requirementVariants}>{requirements.map(getRequirementDiagram)}</div>

      {selectedMark === BY_RATING_ID ? (
        <div className={styles.performanceGraph}>{getPerformanceIndicators(hardwareRatingList, MAX_RATE_VALUE)}</div>
      ) : selectedMark === BY_USING_IN_SETUPS_ID ? (
        <div className={styles.performanceGraph}>{getPerformanceIndicators(hardwareUsingList, MAX_USING_VALUE)}</div>
      ) : (
        <div className={styles.performanceGraph}>
          {getPerformanceIndicators(hardwareCommentList, MAX_COMMENT_VALUE)}
        </div>
      )}

      <div className={styles.indicatorValues}>
        {selectedMark === BY_RATING_ID
          ? valuesRating.map((value) => (
              <span key={value} className={styles.indicatorValue}>
                {value}
              </span>
            ))
          : selectedMark === BY_USING_IN_SETUPS_ID
          ? valuesUsing.map((value) => (
              <span key={value} className={styles.indicatorValue}>
                {value}
              </span>
            ))
          : valuesCounting.map((value) => (
              <span key={value} className={styles.indicatorValue}>
                {value}
              </span>
            ))}
      </div>

      {/* <table className={styles.usedComponents}>
        <tbody>
          {componentItems.map((item) => (
            <tr key={item.title}>
              <th className={styles.usedComponentHeader}>{item.title}</th>
              <td className={styles.usedComponentsBody}>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </section>
  );
};

export default AdminStatisticReport;
