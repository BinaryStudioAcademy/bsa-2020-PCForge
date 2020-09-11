import React from 'react';
import {View} from 'native-base';
import styles from './styles';

interface Props {
  active?: boolean;
}

class RoundButton extends React.PureComponent<Props> {
  public render(): JSX.Element {
    return (
      <View
        style={[
          styles.buttonContainer,
          this.props.active ? styles.active : null,
        ]}>
        <View
          style={[styles.innerButton, this.props.active ? styles.active : null]}
        />
      </View>
    );
  }
}

export default RoundButton;
