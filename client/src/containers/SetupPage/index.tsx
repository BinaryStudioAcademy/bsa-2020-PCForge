import React, { ReactText } from 'react';
import styles from 'containers/SetupPage/styles.module.scss';
import SetupCard from 'components/SetupComponents/SetupCard';
import Comments from 'components/Comments';
import PageComponent from 'containers/PageComponent';
import { MenuItems } from 'common/enums';
import CommentableType from 'common/enums/CommentableItems';
import { ISetupProps, ISetupState } from './interfaces';
import * as SetupActions from './actions';
import { RootState } from 'redux/rootReducer';
import { connect } from 'react-redux';
import NotFound from 'containers/NotFound';
import Spinner from 'components/Spinner';
import HardwareView from 'components/HardwareView';
import TopGames from 'containers/TopGames';
import { Box } from '@material-ui/core';

class ViewSetupPage extends React.Component<ISetupProps, ISetupState> {
  constructor(props: ISetupProps) {
    super(props);
    this.state = props.state;

    this.getSetupComments = this.getSetupComments.bind(this);
    this.onCreateComment = this.onCreateComment.bind(this);
    this.onDeleteComment = this.onDeleteComment.bind(this);
    this.onRatingSet = this.onRatingSet.bind(this);
  }

  public componentDidMount() {
    const id: string = this.props.match.params.id;
    this.props.getSetup({ id: +id });
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

  public onDeleteComment = (id: number) => {
    this.props.deleteSetupComment({ id: +id, idSetup: this.props.state.setup?.id as number });
  };

  public onRatingSet(value: number) {
    this.props.setSetupRate({ id: +this.props.match.params.id, value });
  }

  public render() {
    const { setup, commentsPerPage, commentsCountTotal, hasErrorDuringSetupFetch } = this.props.state;

    if (hasErrorDuringSetupFetch) {
      return <NotFound history={this.props.history} location={this.props.location} match={this.props.match} />;
    }

    if (!setup) {
      return (
        <PageComponent>
          <Box className="spinnerWrapper">
            <Spinner load />
          </Box>
        </PageComponent>
      );
    }

    const { cpu, gpu, motherboard, powerSupply, ram } = setup;
    return (
      <PageComponent titleSelector="Setup" selectedMenuItemNumber={MenuItems.Setup}>
        <div className={styles.setupPageRoot}>
          <h1>PC Setup</h1>
          <div className={styles.contentWrapper}>
            <div className={styles.setupsDetails}>
              <SetupCard
                setup={setup}
                rateClickable
                onForkClick={this.props.forkSetup}
                onRatingSet={this.onRatingSet}
              />
              <HardwareView
                title="Processor"
                hardware={(cpu as unknown) as Record<string, ReactText>}
                schema={{
                  name: { as: 'Name' },
                  cores: { as: 'Cores' },
                  clockspeed: { as: 'ClockSpeed', postfix: ' MHz' },
                  class: { as: 'Class' },
                  tdp: { as: 'Thermal design power' },
                }}
              />
              <HardwareView
                title="Graphics"
                hardware={(gpu as unknown) as Record<string, ReactText>}
                schema={{
                  name: { as: 'Name' },
                  interface: { as: 'Interface' },
                  memorySize: { as: 'Memory', postfix: ' GB' },
                  opengl: { as: 'OpenGL' },
                  tdp: { as: 'Thermal design power' },
                }}
              />
              <HardwareView
                title="RAM"
                hardware={(ram as unknown) as Record<string, ReactText>}
                schema={{
                  name: { as: 'Name' },
                  memorySize: { as: 'Memory', postfix: ' GB' },
                  frequency: { as: 'Frequency', postfix: ' MHz' },
                }}
              />
              <HardwareView
                title="Motherboard"
                hardware={(motherboard as unknown) as Record<string, ReactText>}
                schema={{
                  name: { as: 'Name' },
                }}
              />
              <HardwareView
                title="Power Supply"
                hardware={(powerSupply as unknown) as Record<string, ReactText>}
                schema={{
                  name: { as: 'Name' },
                  power: { as: 'Power' },
                }}
              />
              {this.props.state.comments && this.props.state.setup && (
                <Comments
                  commentsPerPage={commentsPerPage}
                  commentsTotal={commentsCountTotal}
                  comments={this.props.state.comments}
                  rootClassName={styles.commentsRoot}
                  onCreateComment={this.onCreateComment}
                  onDeleteComment={this.onDeleteComment}
                  onPaginationToggle={this.getSetupComments}
                  commentableId={this.props.state.setup.id}
                  commentableType={CommentableType.Setup}
                />
              )}
            </div>
            <div className={styles.asideItems}>
              <TopGames />
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
