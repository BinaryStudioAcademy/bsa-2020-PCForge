import React, { ReactText } from 'react';
import styles from './styles.module.scss';
import { IHardwareProps } from './interfaces';
import * as HardwareActions from './actions';
import { RootState } from 'redux/rootReducer';
import { connect } from 'react-redux';
import Comments from 'components/Comments';
import Snackbar from 'components/BasicComponents/Snackbar';
import { AlertType } from 'components/BasicComponents/Alert';
import RatingBox from 'components/BasicComponents/RatingBox';
import { transformHardware } from './transformers';
import RecordHardwareView from '../RecordHarwareView';

export interface State {
  viewHardware: Record<string, ReactText> | null;
  viewObject: Record<string, ReactText> | null;
  rate: number;
}

class HardwareSidebarView extends React.PureComponent<IHardwareProps, State> {
  constructor(props: IHardwareProps) {
    super(props);
    this.state = {
      viewHardware: null,
      viewObject: null,
      rate: 0,
    };
    this.onCreateComment = this.onCreateComment.bind(this);
    this.getHardwareComments = this.getHardwareComments.bind(this);
    this.onSnackBarClose = this.onSnackBarClose.bind(this);
    this.onRatingSet = this.onRatingSet.bind(this);
  }

  static getDerivedStateFromProps(props: IHardwareProps, state: State): State | null {
    if (!props.hardware) {
      return null;
    }
    if (props.hardware !== state.viewHardware) {
      props.getHardwareComments({
        id: +props.hardware.id,
        type: props.type,
        count: 5,
        from: 0,
      });
      props.getHardwareRate({
        id: +props.hardware.id,
        type: props.type,
      });
      const viewObject = transformHardware(props.hardware, props.type)!;
      return {
        ...state,
        viewHardware: props.hardware,
        viewObject,
      };
    }
    return null;
  }

  public onCreateComment(value: string) {
    const id: number = +this.props.hardware!.id!;
    this.props.createHardwareComment({ id, value, type: this.props.type });
  }

  public getHardwareComments(meta: { count: number; from: number }) {
    const id: number = +this.props.hardware!.id!;
    this.props.getHardwareComments({ id, type: this.props.type, ...meta });
  }

  public onRatingSet(value: number) {
    const id: number = +this.props.hardware!.id!;
    this.props.setHardwareRate({ id, value, type: this.props.type });
  }

  public onSnackBarClose() {
    this.props.wipeSnackbarData();
  }

  public render(): JSX.Element | null {
    const { hardware } = this.props;
    const { commentsPerPage, commentsCountTotal, rate } = this.props.state;

    if (!hardware) {
      return null;
    }

    return (
      <>
        <div className={styles.hardwareRoot}>
          <div className={styles.contentWrapper}>
            {this.state.viewObject && <RecordHardwareView viewObject={this.state.viewObject!} />}
            <div className={styles.ratingBoxWrapper}>
              <RatingBox name="hardware-card" ratingValue={rate} disabled={false} onValueSet={this.onRatingSet} />
            </div>
            <div className={styles.commentsWrapper}>
              {this.props.state?.comments && (
                <Comments
                  commentsPerPage={commentsPerPage}
                  commentsTotal={commentsCountTotal}
                  comments={this.props.state.comments}
                  rootClassName={styles.commentsRoot}
                  buttonClassName={styles.addCommentButton}
                  onCreateComment={this.onCreateComment}
                  onPaginationToggle={this.getHardwareComments}
                />
              )}
            </div>
          </div>
        </div>
        <Snackbar
          open={!!this.props.state.snackbarMessage}
          alertProps={{
            alertTitle: this.props.state.snackbarMessageType === AlertType.error ? 'Error' : '',
            alertType: this.props.state.snackbarMessageType,
          }}
          onClose={this.onSnackBarClose}
        >
          <span>{this.props.state.snackbarMessage}</span>
        </Snackbar>
      </>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    state: state.hardware,
  };
};

const mapDispatchToProps = HardwareActions;

export default connect(mapStateToProps, mapDispatchToProps)(HardwareSidebarView);
