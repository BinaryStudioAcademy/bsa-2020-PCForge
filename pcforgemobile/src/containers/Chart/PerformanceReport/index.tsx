import React from 'react';
import {View, Text, H1} from 'native-base';
import {Text as SVGText} from 'react-native-svg';
import {BarChart} from 'react-native-svg-charts';
import styles from './styles';
import {TouchableHighlight} from 'react-native';
import RoundButton from '../RoundButton';

interface Props {}

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
    const data2 = [80, 60, 90];
    return (
      <View style={styles.root}>
        <View style={styles.headerWrapper}>
          <H1 style={styles.header}>Performance Report</H1>
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
            data={data2}
            svg={{fill: '#eb3d55'}}
            contentInset={{top: 30, bottom: 0}}
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
