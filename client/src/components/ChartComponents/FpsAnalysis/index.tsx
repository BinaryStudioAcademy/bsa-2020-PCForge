import React, { useState } from 'react';
import sharedStyles from '../styles.module.scss';
import styles from './styles.module.scss';

interface Resolution {
  value: string;
  id: number;
  selected: boolean;
}

interface Progress {
  name: string;
  value: number;
}

const GameMatcherFpsAnalysis = (): JSX.Element => {
  const [selectedResolution, setSelectedResolution] = useState<number>(0);

  const resolutions = [
    '1280 x 720',
    '1366 x 768',
    '1600 x 900',
    '1920 x 1080',
    '2560 x 1440',
    '3840 x 2160',
  ].map((value, id) => ({ value, id, selected: id === 0 }));

  const firstColumn = resolutions.slice(0, resolutions.length / 2);
  const secondColumn = resolutions.slice(resolutions.length / 2);
  const mainFpsCounter = 60;

  const progressColumns: Progress[] = [
    { name: 'Low', value: 40 },
    { name: 'Medium', value: 40 },
    { name: 'Hight', value: 76 },
    { name: 'Ultra', value: 11 },
  ];

  const computePositionPercent = (value: number): number => {
    const progressColumnValues = progressColumns.map((column) => column.value);
    const max = Math.max(...progressColumnValues, mainFpsCounter);
    const percent = (value / max) * 100;
    if (percent > 100) {
      return 100;
    }
    if (percent < 0 || !percent) {
      return 0;
    }
    return percent;
  };

  const ResolutionItem = (resolution: Resolution): JSX.Element => {
    const isActive: boolean = resolution.id === selectedResolution;
    return (
      <div className={styles.resolutionItem} key={resolution.id} onClick={() => setSelectedResolution(resolution.id)}>
        <div className={[sharedStyles.circle, isActive ? sharedStyles.activeCircle : ''].join(' ')}></div>
        <span className={styles.resolutionItemText}>{resolution.value}</span>
      </div>
    );
  };

  const ProgressColumn = (progress: Progress) => (
    <div
      style={{ height: computePositionPercent(progress.value) + '%' }}
      className={styles.progressColumn}
      key={progress.name}
    >
      <p className={styles.fpsCountHeader}>{progress.value} FPS</p>
      <div className={styles.progress}></div>
      <p className={styles.progressCaption}>{progress.name}</p>
    </div>
  );

  return (
    <section>
      <h2 className={[sharedStyles.mainHeader, styles.fpsHeader].join(' ')}>Project FPS analysis</h2>
      <div className={styles.fpsAnalysis}>
        <div className={styles.displayResolutions}>
          <div className={styles.column}>{firstColumn.map(ResolutionItem)}</div>
          <div className={styles.column}>{secondColumn.map(ResolutionItem)}</div>
        </div>
        <div className={styles.fpsTest}>
          <div className={styles.fpsGraph}>
            <div className={styles.gameLine} style={{ bottom: computePositionPercent(mainFpsCounter) + '%' }}>
              <p className={styles.gameLineText}>{mainFpsCounter} FPS</p>
            </div>
          </div>
          <div className={styles.progressColumnsContainer}>{progressColumns.map(ProgressColumn)}</div>
        </div>
      </div>
    </section>
  );
};

export default GameMatcherFpsAnalysis;
