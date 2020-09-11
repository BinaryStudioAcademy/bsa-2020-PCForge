import React from 'react';
import {Container, Footer, FooterTab, Button, Text} from 'native-base';
// import * as scale from 'd3-scale';
import styles from './styles';
import {ScrollView} from 'react-native-gesture-handler';
import PerfomanceOverview from './PerfomanceOverview';
import FpsAnalysis from './FpsAnalysis';
import PerformanceReport from './PerformanceReport';
import { RouterItemProps } from 'routing';
import { ISetupPerformance } from 'common/models/setupPerformance.model';
import { Game } from 'common/models/game';

type Props = RouterItemProps<ISetupPerformance & {game: Game}>;

interface State {
  activeTab: 'system' | 'performance' | 'fps analysis';
}

class ChartPage extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    console.log(props.route.params,'chart props');
    
    this.state = {
      activeTab: 'system',
    };
  }
  public render(): JSX.Element {
    const { overall: { cpu, gpu, ram } } = this.props.route.params;
    return (
      <Container>
        <ScrollView>
          {this.state.activeTab === 'system' && <PerfomanceOverview report={this.props.route.params} />}
          {this.state.activeTab === 'performance' && <PerformanceReport report={this.props.route.params} />}
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
