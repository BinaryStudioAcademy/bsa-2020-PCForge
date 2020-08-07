import React from 'react';
import sharedStyles from '../styles.module.scss';
import styles from './styles.module.scss';

const GameMatcherFpsAnalysis = () => {
  return (
    <section>
      <h2 className={[sharedStyles.mainHeader, styles.fpsHeader].join(' ')}>Project FPS analysis</h2>
      <div className={styles.fpsAnalysis}>
        <div className={styles.displayResolutions}>
          <div className={styles.column}>
            <div className={styles.resolutionItem}>
              <div className={[sharedStyles.circle, sharedStyles.activeCircle].join(' ')}></div>
              <span className={styles.resolutionItemText}>1280 x 720</span>
            </div>
            <div className={styles.resolutionItem}>
              <div className={sharedStyles.circle}></div>
              <span className={styles.resolutionItemText}>1366 x 768</span>
            </div>
            <div className={styles.resolutionItem}>
              <div className={sharedStyles.circle}></div>
              <span className={styles.resolutionItemText}>1600 x 900</span>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.resolutionItem}>
              <div className={sharedStyles.circle}></div>
              <span className={styles.resolutionItemText}>1920 x 1080</span>
            </div>
            <div className={styles.resolutionItem}>
              <div className={sharedStyles.circle}></div>
              <span className={styles.resolutionItemText}>2560 x 1440</span>
            </div>
            <div className={styles.resolutionItem}>
              <div className={sharedStyles.circle}></div>
              <span className={styles.resolutionItemText}>3840 x 2160</span>
            </div>
          </div>
        </div>
          <div className={styles.fpsTest}>
            <div className={styles.fpsGraph}>
              <div className={styles.gameLine}>
                <span className={styles.gameLineText}>Game Line</span>
              </div>
            </div>
            <div className={styles.progressColumn}>
              <div className={styles.progress}></div>
              <p className={styles.progressCaption}>Low</p>
            </div>
            <div className={styles.progressColumn}>
              <div style={{height: '80%'}} className={styles.progress}></div>
              <p className={styles.progressCaption}>Medium</p>
            </div>
            <div className={styles.progressColumn}>
              <div style={{height: '50%'}} className={styles.progress}></div>
              <p className={styles.progressCaption}>Hight</p>
            </div>
            <div className={styles.progressColumn}>
              <div style={{height: '30%'}} className={[styles.progress].join(' ')}></div>
              <p className={styles.progressCaption}>Ultra</p>
            </div>
          </div>
      </div>
    </section>
  );
};

export default GameMatcherFpsAnalysis;
