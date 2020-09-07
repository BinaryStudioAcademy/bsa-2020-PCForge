import { roundToNearest } from 'common/helpers/math.helper';
import { Cpu } from 'common/models/cpu';
import { Game } from 'common/models/game';
import { Gpu } from 'common/models/gpu';
import { IReport } from 'common/models/setupPerformance';
import React, { useState } from 'react';
import sharedStyles from '../styles.module.scss';
import styles from './styles.module.scss';

interface IRequirement {
  cpu: number;
  gpu: number;
  ram: number;
}

interface UIRequirement {
  id: number;
  title: string;
}

interface Props {
  cpu: Cpu;
  gpu: Gpu;
  ramSize: number;
  report: IReport;
  game: Game;
}

const GameMatcherPerformanceReport: React.FC<Props> = ({ cpu, gpu, ramSize, report, game }): JSX.Element => {
  const RECOMMENDED_REQUIREMENT_ID = 2;
  const MINIMAL_REQUIREMENT_ID = 1;
  const MAXIMUM_REPORT_VALUE = Math.max(
    roundToNearest(report.minimal.cpu, 100),
    roundToNearest(report.minimal.gpu, 100),
    roundToNearest(report.minimal.ram, 100),
    roundToNearest(report.recommended.cpu, 100),
    roundToNearest(report.recommended.gpu, 100),
    roundToNearest(report.recommended.ram, 100)
  );
  const REPORT_STEP = roundToNearest(MAXIMUM_REPORT_VALUE / 10, 10);
  const [selectedRequirement, setSelectedRequirement] = useState<number>(RECOMMENDED_REQUIREMENT_ID);
  const values = [];
  for (let i = 0; i <= MAXIMUM_REPORT_VALUE; i += REPORT_STEP) {
    values.push(i);
  }
  const requirements: UIRequirement[] = [
    { id: MINIMAL_REQUIREMENT_ID, title: 'Minimal requirement' },
    { id: RECOMMENDED_REQUIREMENT_ID, title: 'Recommended requirement' },
  ];

  const componentItems = [
    { title: 'Processor', description: cpu.name },
    { title: 'Graphics', description: gpu.name },
    { title: 'RAM', description: `${ramSize}GB` },
  ];

  const getRequirementDiagram = (req: UIRequirement) => {
    const isActive = req.id === selectedRequirement;

    return (
      <div className={styles.requirementVariant} key={req.id} onClick={() => setSelectedRequirement(req.id)}>
        <div className={[sharedStyles.circle, isActive ? sharedStyles.activeCircle : ''].join(' ')}></div>
        <span className={styles.requirementText}>{req.title}</span>
      </div>
    );
  };

  const getScaledWidth = (width: number): number => {
    const totalSteps = MAXIMUM_REPORT_VALUE / REPORT_STEP;
    const currentStep = width / REPORT_STEP;
    return (currentStep / totalSteps) * 100;
  };

  const getPerformanceIndicator = (name: string, value: number) => (
    <div className={styles.performanceGraphItem} key={name}>
      <span className={styles.performanceIndicatorHeader}>{name}</span>
      <div className={styles.performanceGraphCentralLine}></div>
      <div className={styles.performanceIndicator} style={{ width: getScaledWidth(value) + '%' }}></div>
    </div>
  );

  const getPerformanceIndicators = (req: IRequirement) => {
    const percents = (100 / MAXIMUM_REPORT_VALUE) * 100;
    let additionalPixels = '+ 0px';
    // we must add or remove pixels because we have margins. So, with margins left: 0% move orl line out of the graph. The same with left: 100%
    if (percents < 50) additionalPixels = '+ 20px';
    if (percents > 50) additionalPixels = '- 20px';
    return (
      <div className={styles.graphWrapper}>
        <div className={styles.indicatorsWrapper}>
          <div className={styles.normalLine} style={{ left: `calc(${percents}% ${additionalPixels})` }}>
            <div className={styles.normalLineText}>100%</div>
          </div>
          {getPerformanceIndicator('CPU', req.cpu)}
          {getPerformanceIndicator('GPU', req.gpu)} {getPerformanceIndicator('RAM', req.ram)}
        </div>
      </div>
    );
  };

  return (
    <section>
      <div className={styles.performanceReportHeader}>
        <div className={`${sharedStyles.mainHeader} ${styles.performanceReportHeaderHeader}`}>Performance Report</div>
        <div className={styles.gameHeader}>
          <span className={styles.gameHeaderHeader}>GAME</span>
          <span className={styles.gameHeaderBody}>{game.name}</span>
        </div>
      </div>

      <div className={styles.requirementVariants}>{requirements.map(getRequirementDiagram)}</div>

      {selectedRequirement === RECOMMENDED_REQUIREMENT_ID ? (
        <div className={styles.performanceGraph}>{getPerformanceIndicators(report.recommended)}</div>
      ) : (
        <div className={styles.performanceGraph}>{getPerformanceIndicators(report.minimal)}</div>
      )}
      <div className={styles.indicatorValues}>
        {values.map((value) => (
          <span key={value} className={styles.indicatorValue}>
            {value}
          </span>
        ))}
      </div>

      <table className={styles.usedComponents}>
        <tbody>
          {componentItems.map((item) => (
            <tr key={item.title}>
              <th className={styles.usedComponentHeader}>{item.title}</th>
              <td className={styles.usedComponentsBody}>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default GameMatcherPerformanceReport;
