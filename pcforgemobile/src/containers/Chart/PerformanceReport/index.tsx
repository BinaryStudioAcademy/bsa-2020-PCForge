import React from 'react';
import {View, Text, H1} from 'native-base';
import {Text as SVGText} from 'react-native-svg';
import {BarChart} from 'react-native-svg-charts';
import styles from './styles';
import {TouchableHighlight} from 'react-native';
import RoundButton from '../RoundButton';
import {ISetupPerformance} from 'common/models/setupPerformance.model';
import {Game} from 'common/models/game.model';
import {Cpu} from 'common/models/cpu.model';
import {Gpu} from 'common/models/gpu.model';

interface Props {
  report: ISetupPerformance & {game: Game; cpu: Cpu; gpu: Gpu; ramSize: number};
}

interface State {
  activeRequirement: 'minimal' | 'recommended';
}

class PerformanceReport extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      activeRequirement: 'minimal',
    };
  }
  public Labels({x, y, bandwidth, data}: any) {
    return data.map((value: number, index: number) => (
      <SVGText
        key={index}
        x={x(index) + bandwidth / 2}
        y={y(value) - 16}
        fontSize={12}
        fill={'#fff'}
        alignmentBaseline={'hanging'}
        textAnchor={'middle'}>
        {value + '%'}
      </SVGText>
    ));
  }
  public render(): JSX.Element {
    const {minimal, recommended} = this.props.report.report;
    const {game} = this.props.report;
    const minimalData = [minimal.cpu, minimal.gpu, minimal.ram];
    const recommendedData = [recommended.cpu, recommended.gpu, recommended.ram];
    return (
      <View style={styles.root}>
        <View style={styles.headerWrapper}>
          <H1 style={styles.header}>Performance Report</H1>
        </View>
        <View style={styles.metaContainer}>
          <View style={styles.metaTextWrapper}>
            <View>
              <Text style={styles.gameLabel}>
                Game:{' '}
                <Text style={[styles.metaText, styles.noTransform]}>
                  {game.name}
                </Text>
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.requirementsContainer}>
          <TouchableHighlight
            underlayColor={'rgba(255, 255, 255, 0.3)'}
            onPress={() => this.setState({activeRequirement: 'minimal'})}>
            <View style={styles.requirementItem}>
              <RoundButton
                active={this.state.activeRequirement === 'minimal'}
              />
              <Text style={styles.requirementItemText}>
                Minimal requirement
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor={'rgba(255, 255, 255, 0.3)'}
            onPress={() => this.setState({activeRequirement: 'recommended'})}>
            <View style={styles.requirementItem}>
              <RoundButton
                active={this.state.activeRequirement === 'recommended'}
              />
              <Text style={styles.requirementItemText}>
                Recommended requirement
              </Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.chartContainer}>
          <BarChart
            style={styles.chart}
            data={
              this.state.activeRequirement === 'minimal'
                ? minimalData
                : recommendedData
            }
            svg={{fill: '#eb3d55'}}
            contentInset={{top: 30, bottom: 0}}
            yMax={Math.max(
              ...(this.state.activeRequirement === 'minimal'
                ? minimalData
                : recommendedData),
              100,
            )}
            gridMin={0}>
            <this.Labels />
          </BarChart>
        </View>
        <View style={styles.bottomLabels}>
          <Text style={styles.bottomLabelText}>Cpu</Text>
          <Text style={styles.bottomLabelText}>Gpu</Text>
          <Text style={styles.bottomLabelText}>Ram</Text>
        </View>
      </View>
    );
  }
}

export default PerformanceReport;
