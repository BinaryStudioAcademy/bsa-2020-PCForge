import React from 'react';
import {Container, Footer, FooterTab, Button, Text} from 'native-base';
// import * as scale from 'd3-scale';
import styles from './styles';
import {ScrollView} from 'react-native-gesture-handler';
import PerfomanceOverview from './PerfomanceOverview';
import FpsAnalysis from './FpsAnalysis';
import PerformanceReport from './PerformanceReport';

interface Props {}

interface State {
  activeTab: 'system' | 'performance' | 'fps analysis';
}

class ChartPage extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      activeTab: 'system',
    };
  }
  public render(): JSX.Element {
    return (
      <Container>
        <ScrollView>
          {this.state.activeTab === 'system' && <PerfomanceOverview />}
          {this.state.activeTab === 'performance' && <PerformanceReport />}
          {this.state.activeTab === 'fps analysis' && <FpsAnalysis />}
        </ScrollView>
        <Footer>
          <FooterTab>
            <Button
              style={[
                styles.footerTab,
                this.state.activeTab === 'system' && styles.footerTabActive,
              ]}
              onPress={() => this.setState({activeTab: 'system'})}>
              <Text>System</Text>
            </Button>
            <Button
              style={[
                styles.footerTab,
                styles.footerTabCentral,
                this.state.activeTab === 'performance' &&
                  styles.footerTabActive,
              ]}
              onPress={() => this.setState({activeTab: 'performance'})}>
              <Text>Performance</Text>
            </Button>
            <Button
              style={[
                styles.footerTab,
                this.state.activeTab === 'fps analysis' &&
                  styles.footerTabActive,
              ]}
              onPress={() => this.setState({activeTab: 'fps analysis'})}>
              <Text>FPS analysis</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default ChartPage;
