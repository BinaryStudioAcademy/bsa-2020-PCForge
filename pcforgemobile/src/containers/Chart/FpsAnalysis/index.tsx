import React from 'react';
import {View, Text, H1} from 'native-base';
import {BarChart} from 'react-native-svg-charts';
import {Text as SVGText} from 'react-native-svg';
import styles from './styles';
import RoundButton from 'containers/Chart/RoundButton';
import {TouchableHighlight} from 'react-native-gesture-handler';

interface Props {}
interface State {
  activeResolution: string;
}

class FpsAnalysis extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      activeResolution: '1280 x 720',
    };
  }
  public resolutions: string[] = [
    '1280 x 720',
    '1366 x 768',
    '1600 x 900',
    '1920 x 1080',
    '2560 x 1440',
    '3840 x 2160',
  ];
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
  public max(): number {
    const max = Math.max(...[10, 5, 80, 15], 60);
    return max;
  }
  public render(): JSX.Element {
    const data = [10, 5, 60, 15];
    return (
      <View style={styles.root}>
        <View style={styles.headerWrapper}>
          <H1 style={styles.header}>FPS analysis</H1>
        </View>
        <View style={styles.resolutionsContainer}>
          {this.resolutions.map((resolution) => (
            <TouchableHighlight
              key={resolution}
              underlayColor={'rgba(255, 255, 255, 0.3)'}
              onPress={() => this.setState({activeResolution: resolution})}>
              <View style={styles.resolutionItem}>
                <RoundButton
                  active={this.state.activeResolution === resolution}
                />
                <Text style={styles.resolutionItemText}>{resolution}</Text>
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
            yMax={this.max()}
            gridMin={0}>
            <this.Labels />
          </BarChart>
          <View style={styles.optimalFpsLineContainer}>
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
