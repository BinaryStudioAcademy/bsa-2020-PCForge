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

  const progressColumns = [
    { name: 'Low', value: 92 },
    { name: 'Medium', value: 70 },
    { name: 'Hight', value: 46 },
    { name: 'Ultra', value: 21 },
  ];

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
    <div className={styles.progressColumn} key={progress.name}>
      <div style={{ height: progress.value + '%' }} className={styles.progress}></div>
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
            <div className={styles.gameLine}>
              <span className={styles.gameLineText}>Game Line</span>
            </div>
          </div>
          {progressColumns.map(ProgressColumn)}
        </div>
      </div>
    </section>
  );
};

export default GameMatcherFpsAnalysis;
