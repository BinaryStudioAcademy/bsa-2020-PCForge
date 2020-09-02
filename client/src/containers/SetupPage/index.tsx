import React from 'react';
import styles from 'containers/SetupPage/styles.module.scss';
import PcComponentView from 'components/SetupComponents/PcComponentView';
import SetupCard from 'components/SetupComponents/SetupCard';
import Comments from 'components/Comments';
import TopGames from 'components/ChartComponents/TopGames';
import PageComponent from 'containers/PageComponent';
import { MenuItems } from 'common/enums';
import { ISetupProps, ISetupState } from './interfaces';
import * as SetupActions from './actions';
import { RootState } from 'redux/rootReducer';
import { connect } from 'react-redux';
import NotFound from 'containers/NotFound';
import Spinner from 'components/Spinner';
import Snackbar from 'components/BasicComponents/Snackbar';
import { AlertType } from 'components/BasicComponents/Alert';
import * as Sentry from '@sentry/react';

class ViewSetupPage extends React.Component<ISetupProps, ISetupState> {
  constructor(props: ISetupProps) {
    super(props);
    this.state = props.state;

    this.getSetupComments = this.getSetupComments.bind(this);
    this.onCreateComment = this.onCreateComment.bind(this);
    this.onRatingSet = this.onRatingSet.bind(this);
    this.onSnackBarClose = this.onSnackBarClose.bind(this);
  }

  public componentDidMount() {
    const id: string = this.props.match.params.id;
    this.props.getSetup({ id: +id });
    this.props.getSetupRate({ id: +id });
    this.getSetupComments({ count: 20, from: 0 });
  }

  public getSetupComments = (meta: { count: number; from: number }) => {
    const id: number = +this.props.match.params.id;
    this.props.getSetupComments({ id, ...meta });
  };

  public onCreateComment = (value: string) => {
    const id: string = this.props.match.params.id;
    this.props.createSetupComment({ id: +id, value: value });
  };

  public onRatingSet(value: number) {
    this.props.setSetupRate({ id: +this.props.match.params.id, value });
  }

  public onSnackBarClose() {
    this.props.wipeSnackbarData();
  }

  public render() {
    const { setup, commentsPerPage, commentsCountTotal, hasErrorDuringSetupFetch } = this.props.state;

    if (hasErrorDuringSetupFetch) {
      return <NotFound history={this.props.history} location={this.props.location} match={this.props.match} />;
    }

    if (!setup) {
      return <Spinner />;
    }

    const { cpu, gpu, motherboard, powerSupply, ram } = setup;
    return (
      <PageComponent selectedMenuItemNumber={MenuItems.Setup}>
        <div className={styles.setupPageRoot}>
          <h1>PC setup</h1>
          <Snackbar
            open={!!(this.props.state.snackbarMessage && this.state.snackbarMessageType)}
            alertProps={{
              alertTitle: this.state.snackbarMessageType === AlertType.error ? 'Error' : '',
              alertType: this.state.snackbarMessageType,
            }}
            onClose={this.onSnackBarClose}
          >
            <span>{this.state.snackbarMessage}</span>
          </Snackbar>
          <div className={styles.contentWrapper}>
            <div className={styles.setupsDetails}>
              <SetupCard
                setup={setup}
                onForkClick={this.props.forkSetup}
                rate={this.props.state.rate}
                onRatingSet={this.onRatingSet}
              />
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

              {this.props.state?.comments && (
                <Comments
                  commentsPerPage={commentsPerPage}
                  commentsTotal={commentsCountTotal}
                  comments={this.props.state.comments}
                  rootClassName={styles.commentsRoot}
                  onCreateComment={this.onCreateComment}
                  onPaginationToggle={this.getSetupComments}
                />
              )}
            </div>
            <div className={styles.asideItems}>
              <TopGames topGames={[]} />
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
