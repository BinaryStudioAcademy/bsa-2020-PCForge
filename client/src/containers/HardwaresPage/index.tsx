import React from 'react';
import PageComponent from 'containers/PageComponent';
import styles from './styles.module.scss';
import { FormControl, InputLabel, Select, MenuItem, GridListTile, GridList } from '@material-ui/core';
import HardwareSidebarView from './HardwareSidebarView';
import { RootState } from 'redux/rootReducer';
import { hardwareTypes } from './HardwareSidebarView/actionTypes';
import { IHardwaresProps } from './interfaces';

interface State {
  selectedHardware: hardwareTypes;
  page: number;
  count: number;
}

class HardwaresPage extends React.PureComponent<IHardwaresProps, State> {
  constructor(props: IHardwaresProps) {
    super(props);
    this.state = {
      selectedHardware: 'cpu',
      page: 1,
      count: 20,
    };

    this.onSelect = this.onSelect.bind(this);
  }

  public hardwareTypes = [
    { title: 'Pcocessor', value: 'cpu' },
    { title: 'Graphics', value: 'gpu' },
    { title: 'Motherboard', value: 'motheboard' },
    { title: 'Power Supply', value: 'powerSupply' },
    { title: 'HDD', value: 'hdd' },
    { title: 'SSD', value: 'ssd' },
  ];

  public onSelect(e: React.ChangeEvent<{ name?: string; value: unknown }>): void {
    this.setState({
      selectedHardware: e.target.value as hardwareTypes,
    });
  }

  public getHardwares(meta: { count: number; page: number }): void {
    const { count, page } = meta;
    const type: hardwareTypes = this.state.selectedHardware;
    this.props.getHardwares({ type, page, count });
  }

  public render(): JSX.Element {
    return (
      <PageComponent>
        <div className={styles.hardwaresRoot}>
          <FormControl variant="outlined">
            <InputLabel id="hardware-label" className={styles.selectLabel}>
              Hardware
            </InputLabel>
            <Select
              className={styles.hardwareSelect}
              labelId="hardware-label"
              value={this.state.selectedHardware}
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
                <GridListTile className={styles.hardwareItem}>
                  <div className={styles.hardwareContainer}>
                    <h2 className={styles.listHardwareHeader}>Tile</h2>
                  </div>
                </GridListTile>
                <GridListTile className={styles.hardwareItem}>
                  <div className={styles.hardwareContainer}>
                    <h2 className={styles.listHardwareHeader}>Tile</h2>
                  </div>
                </GridListTile>
                <GridListTile className={styles.hardwareItem}>
                  <div className={styles.hardwareContainer}>
                    <h2 className={styles.listHardwareHeader}>Tile</h2>
                  </div>
                </GridListTile>
              </GridList>
            </div>
            <div className={styles.asideContent}>
              <div className={styles.hardwareBar}>
                <h2 className={styles.hardwareHeader}>Selected hardware</h2>
                <div className={styles.divider} />
                <HardwareSidebarView></HardwareSidebarView>
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
    // state: state.
  };
};

export default HardwaresPage;
