import React, { ReactText } from 'react';
import PageComponent from 'containers/PageComponent';
import styles from './styles.module.scss';
import { FormControl, InputLabel, Select, MenuItem, GridListTile, GridList } from '@material-ui/core';
import HardwareSidebarView from './HardwareSidebarView';
import * as HardwaresActions from './actions';
import { RootState } from 'redux/rootReducer';
import { hardwareTypes } from './HardwareSidebarView/actionTypes';
import { IHardwaresProps } from './interfaces';
import { connect } from 'react-redux';
import Paginator from 'components/Paginator';
import { MenuItems } from 'common/enums';

interface State {
  hardware: Record<string, ReactText> | null;
  type: hardwareTypes;
  from: number;
  count: number;
  itemsPerPage: number;
}

class HardwaresPage extends React.Component<IHardwaresProps, State> {
  constructor(props: IHardwaresProps) {
    super(props);
    this.state = {
      hardware: null,
      type: 'cpu',
      from: 1,
      count: 20,
      itemsPerPage: 21,
    };

    this.onSelect = this.onSelect.bind(this);
    this.getHardwares = this.getHardwares.bind(this);
  }

  public hardwareTypes = [
    { title: 'Pcocessor', value: 'cpu' },
    { title: 'Graphics', value: 'gpu' },
    { title: 'Motherboard', value: 'motherboard' },
    { title: 'Power Supply', value: 'powersupply' },
    { title: 'HDD', value: 'hdd' },
    { title: 'SSD', value: 'ssd' },
  ];

  public onSelect(e: React.ChangeEvent<{ name?: string; value: unknown }>): void {
    this.setState({
      type: e.target.value as hardwareTypes,
      hardware: null,
    });
    const meta = {
      count: this.state.count,
      from: this.state.from,
      type: e.target.value as hardwareTypes,
    };
    this.getHardwares(meta);
  }

  public getHardwares(meta: { count: number; from: number; type?: hardwareTypes }): void {
    this.setState({ count: meta.count, from: meta.from });
    const { count, from, type = this.state.type } = meta;
    this.props.getHardwares({ type, from, count });
  }

  public onHardwareChoose(hardware: Record<string, ReactText>) {
    this.setState({ hardware });
  }

  public componentDidMount(): void {
    this.getHardwares({ count: 21, from: 0 });
  }

  public render(): JSX.Element {
    const { hardwares } = this.props.state;
    return (
      <PageComponent selectedMenuItemNumber={MenuItems.Hardwares}>
        <div className={styles.hardwaresRoot}>
          <FormControl variant="outlined">
            <InputLabel id="hardware-label" className={styles.selectLabel}>
              Hardware
            </InputLabel>
            <Select
              className={styles.hardwareSelect}
              labelId="hardware-label"
              value={this.state.type}
              onChange={this.onSelect}
              label="Age"
            >
              {this.hardwareTypes.map((hardware) => (
                <MenuItem value={hardware.value} key={hardware.value}>
                  {hardware.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <div className={styles.contentWrapper}>
            <div className={styles.mainContent}>
              <GridList className={styles.hardwaresList} cellHeight={80} cols={3}>
                {hardwares.map((hardware) => (
                  <GridListTile
                    className={styles.hardwareItem}
                    key={hardware.id}
                    onClick={() => this.onHardwareChoose(hardware)}
                  >
                    <div className={styles.hardwareContainer}>
                      <h2 className={styles.listHardwareHeader}>{hardware.name}</h2>
                    </div>
                  </GridListTile>
                ))}
              </GridList>
              <div className={styles.paginatorContainer}>
                <Paginator
                  setPagination={this.getHardwares}
                  countComponents={this.props.state.totalItems}
                  countComponentsOnPage={this.state.itemsPerPage}
                />
              </div>
            </div>
            <div className={styles.asideContent}>
              <div className={styles.hardwareBar}>
                <h2 className={styles.hardwareHeader}>Selected hardware</h2>
                <div className={styles.divider} />
                <HardwareSidebarView hardware={this.state.hardware} type={this.state.type} />
              </div>
            </div>
          </div>
        </div>
      </PageComponent>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    state: state.hardwares,
  };
};

const mapDispatchToProps = HardwaresActions;

export default connect(mapStateToProps, mapDispatchToProps)(HardwaresPage);
