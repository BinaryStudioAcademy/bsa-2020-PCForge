import React from 'react';
import {View, H1, H3, Text} from 'native-base';
import styles from './styles';
import CircularProgress from '../CircularProgress';
import {ISetupPerformance} from 'common/models/setupPerformance.model';
import {Game} from 'common/models/game.model';
import {Cpu} from 'common/models/cpu.model';
import {Gpu} from 'common/models/gpu.model';

interface Props {
  report: ISetupPerformance & {game: Game; cpu: Cpu; gpu: Gpu; ramSize: number};
}

class PerfomanceOverview extends React.PureComponent<Props> {
  public getSummary(): string {
    const {overall} = this.props.report;
    const TOTAL_GAME_NUMBER = 100;
    const POSSIBLE_GAME_NUMBER = Math.ceil(
      (Math.min(overall.cpu, overall.gpu, overall.ram) / 10) *
        TOTAL_GAME_NUMBER,
    );
    return `In summary, among ${TOTAL_GAME_NUMBER} most demanding games this setup can meet ${POSSIBLE_GAME_NUMBER} recommended requirements`;
  }
  public render(): JSX.Element {
    const {cpu, gpu, ram} = this.props.report.overall;
    const {name} = this.props.report.game;
    return (
      <View>
        <View style={styles.headerWrapper}>
          <H1 style={styles.header}>Perfomance overview</H1>
        </View>
        <View style={styles.metaContainer}>
          <View style={styles.metaTextWrapper}>
            <View>
              <Text style={styles.gameLabel}>
                Game:{' '}
                <Text style={[styles.metaText, styles.noTransform]}>
                  {name}
                </Text>
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.metaContainer}>
          <View style={[styles.metaTextWrapper]}>
            <View>
              <Text style={styles.gameLabel}>
                Setup Performance:{' '}
                <Text style={[styles.metaText, styles.noTransform]}>
                  {this.getSummary()}
                </Text>
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.harwaresContainer}>
          <View style={styles.hardwareItemProgressContainer}>
            <CircularProgress value={cpu} />
            <View style={styles.hardwareMetaContainer}>
              <H3 style={styles.hardwareItemLabel}>Processor</H3>
              <Text style={styles.hardwareItemName}>
                {this.props.report.cpu.name}
              </Text>
            </View>
          </View>
          <View style={styles.hardwareItemProgressContainer}>
            <CircularProgress value={gpu} />
            <View style={styles.hardwareMetaContainer}>
              <H3 style={styles.hardwareItemLabel}>Graphics</H3>
              <Text style={styles.hardwareItemName}>
                {this.props.report.gpu.name}
              </Text>
            </View>
          </View>
          <View style={styles.hardwareItemProgressContainer}>
            <CircularProgress value={ram} />
            <View style={styles.hardwareMetaContainer}>
              <H3 style={styles.hardwareItemLabel}>RAM</H3>
              <Text style={styles.hardwareItemName}>
                {this.props.report.ramSize} GB
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default PerfomanceOverview;
