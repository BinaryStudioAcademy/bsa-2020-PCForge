import React from 'react';
import {ProgressCircle} from 'react-native-svg-charts';
import {View, Text} from 'native-base';
import styles from './styles';

export interface Props {
  value: number;
}

class CircularProgress extends React.PureComponent<Props> {
  public render(): JSX.Element {
    const {value} = this.props;
    return (
      <View style={styles.progressCircleContainer}>
        <ProgressCircle
          style={styles.progressCircle}
          progress={value / 10}
          strokeWidth={8}
          backgroundColor={'#3c444d'}
          progressColor={'#4972ff'}
        />
        <Text style={styles.progressText}>{value}</Text>
      </View>
    );
  }
}

export default CircularProgress;
