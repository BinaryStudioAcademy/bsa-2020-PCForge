import { isEqual } from 'common/helpers/array.helper';
import React, { useState } from 'react';
import sharedStyles from '../styles.module.scss';
import styles from './styles.module.scss';

type IResolution = [number, number];

interface IFpsAnalysis {
  low: number;
  medium: number;
  high: number;
  ultra: number;
}

interface Progress {
  name: string;
  value: number;
}

interface Props {
  fpsAnalysis: [IResolution, IFpsAnalysis][];
}

const GameMatcherFpsAnalysis: React.FC<Props> = ({ fpsAnalysis }) => {
  const [selectedResolution, setSelectedResolution] = useState<IResolution>([1920, 1080]);

  const resolutions = fpsAnalysis.map((value) => value[0]);
  // .map((value) => {
  //   const [resolution] = value;
  //   const [width, height] = resolution;
  //   return `${width} x ${height}`;
  // })
  // .map((value, id) => ({ value, id, selected: id === 0 }));

  const firstColumn = resolutions.slice(0, resolutions.length / 2);
  const secondColumn = resolutions.slice(resolutions.length / 2);
  const mainFpsCounter = 60;

  const findFpsForResolution = (_resolution: IResolution): IFpsAnalysis => {
    for (const analysis of fpsAnalysis) {
      const [resolution, fps] = analysis;
      if (isEqual<number>(resolution, _resolution)) {
        return fps;
      }
    }
    return {
      low: 0,
      medium: 0,
      high: 0,
      ultra: 0,
    };
  };

  const getResolutionString = (resolution: IResolution): string => {
    const [width, height] = resolution;
    return `${width} x ${height}`;
  };

  const getProgressColumns = (): Progress[] => {
    const analysis = findFpsForResolution(selectedResolution);
    return [
      { name: 'Low', value: analysis.low },
      { name: 'Medium', value: analysis.medium },
      { name: 'Hight', value: analysis.high },
      { name: 'Ultra', value: analysis.ultra },
    ];
  };

  const progressColumns: Progress[] = getProgressColumns();

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

  const ResolutionItem = (resolution: IResolution): JSX.Element => {
    const isActive: boolean = isEqual<number>(resolution, selectedResolution);
    return (
      <div
        className={styles.resolutionItem}
        key={getResolutionString(resolution)}
        onClick={() => setSelectedResolution(resolution)}
      >
        <div className={[sharedStyles.circle, isActive ? sharedStyles.activeCircle : ''].join(' ')}></div>
        <span className={styles.resolutionItemText}>{getResolutionString(resolution)}</span>
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
