import React, { ReactText } from 'react';
import styles from './styles.module.scss';
import { RouteComponentProps } from 'react-router-dom';
import { hardwareTypes } from './actionTypes';
import { IHardwareProps } from './interfaces';
import * as HardwareActions from './actions';
import { RootState } from 'redux/rootReducer';
import { connect } from 'react-redux';
import { cpuSchema, gpuSchema, ramSchema, motherboardSchema, powerSupplySchema } from './schemas';
import HardwareView, { HardwareSchema } from 'components/HardwareView';
import Comments from 'components/Comments';
import TopGames from 'components/ChartComponents/TopGames';
import NotFound from 'containers/NotFound';
import Spinner from 'components/Spinner';
import Snackbar from 'components/BasicComponents/Snackbar';
import { AlertType } from 'components/BasicComponents/Alert';
import RatingBox from 'components/BasicComponents/RatingBox';

export interface HardwareProps extends RouteComponentProps<{ type: hardwareTypes; id: string }> {
  hardware: Record<string, string | number>;
}

interface State {
  type: hardwareTypes;
  title: string;
  schema: HardwareSchema | null;
  fullSchema: HardwareSchema | null;
  hardware: Record<string, ReactText> | null;
}

class HardwareSidebarView extends React.PureComponent<IHardwareProps, State> {
  constructor(props: IHardwareProps) {
    super(props);
    this.state = {
      hardware: null,
      schema: null,
      title: '',
      fullSchema: null,
      type: 'cpu',
      // type: this.props.state.type,
    };
    this.plainSchema = this.plainSchema.bind(this);
    this.onCreateComment = this.onCreateComment.bind(this);
    this.getHardwareComments = this.getHardwareComments.bind(this);
    this.onSnackBarClose = this.onSnackBarClose.bind(this);
    this.onRatingSet = this.onRatingSet.bind(this);
  }

  componentDidMount() {
    this.setState({
      // schema: this.useSchema(),
    });
    // const type = this.props.state.hardwareMeta.type;
    // const id: number = +this.props.state.type;
    // this.props.getHardware({ id, type });
    // this.props.getHardwareRate({ id, type });
    // this.props.getHardwareComments({ id, type, count: 20, from: 0 });
  }

  public useSchema() {
    // const type = this.props.match.params.type;
    // if (type === 'cpu') {
    //   this.setState({ title: 'CPU' });
    //   return this.plainSchema(cpuSchema);
    // }
    // if (type === 'gpu') {
    //   this.setState({ title: 'GPU' });
    //   return this.plainSchema(gpuSchema);
    // }
    // if (type === 'ram') {
    //   this.setState({ title: 'RAM' });
    //   return this.plainSchema(ramSchema);
    // }
    // if (type === 'motherboard') {
    //   this.setState({ title: 'Motherboard' });
    //   return this.plainSchema(motherboardSchema);
    // }
    // if (type === 'powersupply') {
    //   this.setState({ title: 'Power Supply' });
    //   return this.plainSchema(powerSupplySchema);
    // }
    // return null;
  }

  static getDerivedStateFromProps(props: IHardwareProps, state: State) {
    if (!props.state.hardware || state.hardware || !state.schema) {
      return null;
    }
    // eslint-disable-next-line
    let originalHardware = props.state.hardware as any;
    const originalSchema = state.fullSchema!;
    const hardware: Record<string, ReactText> = {};
    for (const key of Object.keys(originalSchema)) {
      if (originalSchema[key].as) {
        hardware[key] = originalHardware[key];
      }

      const embedded = originalSchema[key].embedded;
      if (embedded) {
        for (const secondKey of Object.keys(embedded)) {
          hardware[embedded[secondKey].key!] = originalHardware[key][secondKey];
        }
      }
    }
    return { ...state, hardware };
  }

  public plainSchema(schema: HardwareSchema) {
    this.setState({ fullSchema: schema });
    const keys = Object.keys(schema);
    const plainedSchema: HardwareSchema = {};

    for (const key of keys) {
      if (!schema[key].embedded) {
        plainedSchema[key] = schema[key];
      }
      if (schema[key].embedded) {
        const embedded = schema[key].embedded;
        for (const key of Object.keys(embedded!)) {
          plainedSchema[embedded![key].key!] = embedded![key];
        }
      }
    }
    return plainedSchema;
  }

  public onCreateComment(value: string) {
    // const id: number = +this.props.match.params.id;
    // this.props.createHardwareComment({ id, value, type: this.state.type });
  }

  public getHardwareComments(meta: { count: number; from: number }) {
    // const id: number = +this.props.match.params.id;
    // this.props.getHardwareComments({ id, type: this.state.type, ...meta });
  }

  public onRatingSet(value: number) {
    // this.props.setHardwareRate({ id: +this.props.match.params.id, value, type: this.state.type });
  }

  public onSnackBarClose() {
    this.props.wipeSnackbarData();
  }

  public render(): JSX.Element | null {
    const { hardware, schema, title } = this.state;
    const { commentsPerPage, commentsCountTotal, hasErrorDuringHardwareFetch } = this.props.state;

    if (!this.props.state.hardwareMeta) {
      return null;
    }

    if (!hardware) {
      return <Spinner />;
    }

    return (
      <div className={styles.hardwareRoot}>
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
        <div className={styles.contentWrapper}>
          <div className={styles.ratingBoxWrapper}>
            <RatingBox
              name="hardware-card"
              ratingValue={this.props.state.rate}
              disabled={false}
              onValueSet={this.onRatingSet}
            />
          </div>
          {/* <HardwareView title={title} schema={schema} hardware={hardware}></HardwareView> */}
          <div className={styles.commentsWrapper}>
            {this.props.state?.comments && (
              <Comments
                commentsPerPage={commentsPerPage}
                commentsTotal={commentsCountTotal}
                comments={this.props.state.comments}
                rootClassName={styles.commentsRoot}
                onCreateComment={this.onCreateComment}
                onPaginationToggle={this.getHardwareComments}
              />
            )}
          </div>
        </div>
        <div className={styles.asideItems}>
          <TopGames topGames={[]} />
        </div>
      </div>
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
