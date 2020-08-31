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
import PageComponent from 'containers/PageComponent';
import { MenuItems } from 'common/enums';
import Comments from 'components/Comments';
import TopGames from 'components/ChartComponents/TopGames';

export interface HardwareProps extends RouteComponentProps<{ type: hardwareTypes; id: string }> {
  hardware: Record<string, string | number>;
}

interface State {
  type: string;
  title: string;
  schema: HardwareSchema | null;
  fullSchema: HardwareSchema | null;
  hardware: Record<string, ReactText> | null;
}

class HardwarePage extends React.PureComponent<IHardwareProps, State> {
  constructor(props: IHardwareProps) {
    super(props);
    this.state = {
      hardware: null,
      schema: null,
      title: '',
      fullSchema: null,
      type: this.props.match.params.type,
    };
    this.plainSchema = this.plainSchema.bind(this);
  }

  componentDidMount() {
    this.setState({
      schema: this.useSchema(),
    });
    const type = this.props.match.params.type;
    const id: number = +this.props.match.params.id;
    this.props.getHardware({ id, type });
  }

  public useSchema() {
    const type = this.props.match.params.type;
    if (type === 'cpus') {
      this.setState({ title: 'CPU' });
      return this.plainSchema(cpuSchema);
    }
    if (type === 'gpus') {
      this.setState({ title: 'GPU' });
      return this.plainSchema(gpuSchema);
    }
    if (type === 'rams') {
      this.setState({ title: 'RAM' });
      return this.plainSchema(ramSchema);
    }
    if (type === 'motherboards') {
      this.setState({ title: 'Motherboard' });
      return this.plainSchema(motherboardSchema);
    }
    if (type === 'powersupplies') {
      this.setState({ title: 'Power Supply' });
      return this.plainSchema(powerSupplySchema);
    }

    return null;
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

  public onCreateComment() {
    console.log('create comment');
  }

  public getHardwareComments() {
    console.log('get hardware');
  }

  public render(): JSX.Element | null {
    const { hardware, schema, title } = this.state;
    if (!hardware || !schema) {
      return null;
    }
    const { commentsPerPage, commentsCountTotal } = this.props.state;

    return (
      <PageComponent selectedMenuItemNumber={MenuItems.Hardware}>
        <div className={styles.hardwareRoot}>
          <div className={styles.contentWrapper}>
            <HardwareView title={title} schema={schema} hardware={hardware}></HardwareView>
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
      </PageComponent>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    state: state.hardware,
  };
};

const mapDispatchToProps = HardwareActions;

export default connect(mapStateToProps, mapDispatchToProps)(HardwarePage);
