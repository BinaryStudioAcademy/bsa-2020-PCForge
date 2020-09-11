import React from 'react';
import {View, Text, H1} from 'native-base';
import {BarChart} from 'react-native-svg-charts';
import {Text as SVGText} from 'react-native-svg';
import styles from './styles';
import RoundButton from 'containers/Chart/RoundButton';
import {TouchableHighlight} from 'react-native-gesture-handler';
import { ISetupPerformance, IFpsAnalysis } from 'common/models/setupPerformance.model';
import { Game } from 'common/models/game.model';
import { Cpu } from 'common/models/cpu.model';
import { Gpu } from 'common/models/gpu.model';

interface Props {
  report: ISetupPerformance & {game: Game, cpu: Cpu, gpu: Gpu, ramSize: number};
}
interface State {
  activeResolution: IFpsAnalysis;
}

class FpsAnalysis extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      activeResolution: this.props.report.fpsAnalysis[0][1],
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
        {value + ' FPS'}
      </SVGText>
    ));
  }
  public transfromFps(analysis: IFpsAnalysis) {
    return [analysis.low, analysis.medium, analysis.high, analysis.ultra];
  }
  public max(values: number[]): number {
    const max = Math.max(...values, 60);
    return max;
  }
  public getMarginBottomForFpsLine(values: number[]): number {
    const max = this.max(values);
    const percent = (60 / max) * 100;
    if (percent > 100) {
      return 100;
    }
    if (percent < 0 || !percent) {
      return 0;
    }
    return percent;
  }
  public render(): JSX.Element {
    const items: { label: string, value: IFpsAnalysis }[] = 
      this.props.report.fpsAnalysis.map(item => ({ label: item[0].join(' x '), value: item[1] }));
    const data = this.transfromFps(this.state.activeResolution);
    return (
      <View style={styles.root}>
        <View style={styles.headerWrapper}>
          <H1 style={styles.header}>FPS analysis</H1>
        </View>
        <View style={styles.resolutionsContainer}>
          {items.map((item) => (
            <TouchableHighlight
              key={item.label}
              underlayColor={'rgba(255, 255, 255, 0.3)'}
              onPress={() => this.setState({activeResolution: item.value})}>
              <View style={styles.resolutionItem}>
                <RoundButton
                  active={this.state.activeResolution === item.value}
                />
                <Text style={styles.resolutionItemText}>{item.label}</Text>
              </View>
            </TouchableHighlight>
          ))}
        </View>
        <View style={styles.chartContainer}>
          <BarChart
            style={styles.chart}
            data={data}
            svg={{fill: '#4972ff'}}
            contentInset={{top: 20, bottom: 0}}
            yMax={this.max(data)}
            gridMin={0}>
            <this.Labels />
          </BarChart>
          <View style={[styles.optimalFpsLineContainer, { 
              bottom: this.getMarginBottomForFpsLine(data) - (this.getMarginBottomForFpsLine(data) / 100) * 10 + '%' 
          }]}>
            <View style={styles.optimalFpsLineSubcontainer}>
              <Text style={styles.optimalFpsLineText}>60 FPS</Text>
              <View style={styles.optimalFpsLine} />
            </View>
          </View>
        </View>
        <View style={styles.labelsContainer}>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>Low</Text>
          </View>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>Medium</Text>
          </View>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>Hight</Text>
          </View>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>Ultra</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default FpsAnalysis;
