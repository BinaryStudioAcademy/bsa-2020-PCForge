import React from 'react';
import {Container, Text, View} from 'native-base';
import {ProgressCircle, BarChart, Grid, YAxis} from 'react-native-svg-charts';
import {Text as SVGText} from 'react-native-svg';
import * as scale from 'd3-scale';
import styles from './styles';
import {ScrollView} from 'react-native-gesture-handler';

class ChartPage extends React.PureComponent {
  public render(): JSX.Element {
    const data = [10, 5, 20, 15];
    const data2 = [80, 60, 90];

    const CUT_OFF = 20;
    const Labels = ({x, y, bandwidth, data}) =>
      data.map((value, index) => (
        <SVGText
          key={index}
          x={x(index) + bandwidth / 2}
          y={y(value)}
          y={y(value) - 15}
          fontSize={14}
          fill={'black'}
          alignmentBaseline={'hanging'}
          textAnchor={'middle'}>
          {value}
        </SVGText>
      ));
    return (
      <Container>
        <ScrollView>
          <View style={styles.progressCircleContainer}>
            <ProgressCircle
              style={styles.progressCircle}
              progress={0.7}
              strokeWidth={10}
              backgroundColor={'#3c444d'}
              progressColor={'#4972ff'}
            />
            <Text style={{alignSelf: 'center', position: 'absolute'}}>
              text
            </Text>
          </View>
          <View style={{backgroundColor: '#fff'}}>
            <View
              style={{
                flexDirection: 'row',
                height: 200,
                // paddingVertical: 16,
              }}>
              {/* <Labels /> */}
              <BarChart
                style={{flex: 1}}
                data={data}
                svg={{fill: '#4972ff'}}
                contentInset={{top: 10, bottom: 0}}
                // spacing={0.2}
                gridMin={0}>
                {/* <Grid direction={Grid.Direction.HORIZONTAL} /> */}
                <Labels />
              </BarChart>
            </View>
            <View
              style={{justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 30}}>
              <Text>Low</Text>
              <Text>Medium</Text>
              <Text>Hight</Text>
              <Text>Ultra</Text>
            </View>
          </View>

          <View style={{backgroundColor: '#fff'}}>
            <View
              style={{
                flexDirection: 'row',
                height: 200,
                // paddingVertical: 16,
              }}>
              {/* <Labels /> */}
              <BarChart
                style={{flex: 1}}
                data={data2}
                svg={{fill: '#eb3d55'}}
                contentInset={{top: 10, bottom: 0}}
                // spacing={0.2}
                gridMin={0}>
                {/* <Grid direction={Grid.Direction.HORIZONTAL} /> */}
                <Labels />
              </BarChart>
            </View>
            <View
              style={{justifyContent: 'space-around', flexDirection: 'row'}}>
              <Text>Cpu</Text>
              <Text>Gpu</Text>
              <Text>Ram</Text>
              {/* <Text>1</Text> */}
            </View>
          </View>
        </ScrollView>
      </Container>
    );
  }
}

export default ChartPage;
