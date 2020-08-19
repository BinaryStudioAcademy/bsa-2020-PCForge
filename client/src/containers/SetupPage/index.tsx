import React from 'react';
import styles from 'containers/SetupPage/styles.module.scss';
import { PCSetup } from 'common/models/setup';
import PcComponentView from 'components/SetupComponents/PcComponentView';
import SetupCard from 'components/SetupComponents/SetupCard';
import Container from '@material-ui/core/Container';
import Comments from 'components/Comments';
import TopGames from 'components/ChartComponents/TopGames';
import PageComponent from 'containers/PageComponent';
import { MenuItems } from 'common/enums';
import { ISetupProps, ISetupState } from './interfaces';
import * as SetupActions from './actions';
import { RootState } from 'redux/rootReducer';
import { connect } from 'react-redux';

class ViewSetupPage extends React.Component<ISetupProps, ISetupState> {
  constructor(props: ISetupProps) {
    super(props);
    this.state = props.state;
  }

  public componentDidMount() {
    const id: string = this.props.match.params.id;
    this.props.getSetup({ id: +id });
    this.props.getSetupComments({ id: +id });
  }

  public render() {
    const { setup } = this.props.state;

    if (!setup) {
      return null;
    }
    const { cpu, gpu, motherboard, powerSupply, ram } = setup;

    console.log(this.props);

    return (
      <PageComponent selectedMenuItemNumber={MenuItems.Setup}>
        <div className={styles.setupPageRoot}>
          <h1>PC setup</h1>
          <div className={styles.contentWrapper}>
            <Container className={styles.setupsDetails}>
              <SetupCard setup={setup} />
              <div className={[styles.underline, styles.noMarginTop].join(' ')}></div>
              <PcComponentView
                title="Processor"
                pcComponent={cpu}
                neededProperties={{
                  name: 'Name',
                  cores: 'Cores',
                  clockspeed: 'Clock Speed',
                  class: 'Class',
                  tdp: 'Thermal design power',
                }}
              />
              <PcComponentView
                title="Graphics"
                pcComponent={gpu}
                neededProperties={{
                  name: 'Name',
                  interface: 'Interface',
                  memorySize: 'Memory',
                  opengl: 'OpenGL',
                  tdp: 'Thermal design power',
                }}
              />
              <PcComponentView
                title="RAM"
                pcComponent={ram}
                neededProperties={{ name: 'Name', memorySize: 'Memory', frequency: 'Frequency' }}
              />
              <PcComponentView title="Motherboard" pcComponent={motherboard} neededProperties={{ name: 'Name' }} />
              <PcComponentView title="Power Supply" pcComponent={powerSupply} neededProperties={{ name: 'Name' }} />
              <div className={styles.underline}></div>
              {this.props.state?.comments && <Comments comments={this.props.state.comments} />}
            </Container>
            <div className={styles.asideItems}>
              <TopGames games={[]} />
            </div>
          </div>
        </div>
      </PageComponent>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    state: state.setupPage,
  };
};

const mapDispatchToProps = SetupActions;

export default connect(mapStateToProps, mapDispatchToProps)(ViewSetupPage);
