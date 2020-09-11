import React from 'react';
import {View, H1, H3, Text} from 'native-base';
import styles from './styles';
import CircularProgress from '../CircularProgress';

class PerfomanceOverview extends React.PureComponent {
  public render(): JSX.Element {
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
                <Text style={styles.metaText}>Hardspace: Shipbreaker</Text>
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
                  In summary, among 100 most demanding games this setup can meet
                  2 recommended requirements
                </Text>
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.harwaresContainer}>
          <View style={styles.hardwareItemProgressContainer}>
            <CircularProgress value={8.6} />
            <View style={styles.hardwareMetaContainer}>
              <H3 style={styles.hardwareItemLabel}>Processor</H3>
              <Text style={styles.hardwareItemName}>
                Intel Core i5-8400T @ 1.70GHz
              </Text>
            </View>
          </View>
          <View style={styles.hardwareItemProgressContainer}>
            <CircularProgress value={8.6} />
            <View style={styles.hardwareMetaContainer}>
              <H3 style={styles.hardwareItemLabel}>Graphics</H3>
              <Text style={styles.hardwareItemName}>FirePro 3D V7750</Text>
            </View>
          </View>
          <View style={styles.hardwareItemProgressContainer}>
            <CircularProgress value={9.6} />
            <View style={styles.hardwareMetaContainer}>
              <H3 style={styles.hardwareItemLabel}>RAM</H3>
              <Text style={styles.hardwareItemName}>12GB</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default PerfomanceOverview;
