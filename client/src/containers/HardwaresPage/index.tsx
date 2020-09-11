import React, { ReactText, ChangeEvent } from 'react';
import PageComponent from 'containers/PageComponent';
import styles from './styles.module.scss';
import HardwareSidebarView from './HardwareSidebarView';
import * as HardwaresActions from './actions';
import { RootState } from 'redux/rootReducer';
import { hardwareTypes } from './HardwareSidebarView/actionTypes';
import { IHardwaresProps } from './interfaces';
import { connect } from 'react-redux';
import Paginator from 'components/Paginator';
import { MenuItems } from 'common/enums';
import ModalAddRequest from 'containers/AddUserRequest';
import Link from 'components/BasicComponents/Link';
import { UserRequestedType } from 'common/enums/UserRequestedType';
import { concatClassNames } from 'common/helpers/global.helper';
import SearchIcon from '@material-ui/icons/Search';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  GridListTile,
  GridList,
  TextField,
  InputAdornment,
} from '@material-ui/core';
import debounce from 'lodash-es/debounce';

interface State {
  hardware: Record<string, ReactText> | null;
  type: hardwareTypes;
  from: number;
  count: number;
  itemsPerPage: number;
  searchValue: string;
  displayAddRequestOpen: boolean;
}

class HardwaresPage extends React.Component<IHardwaresProps, State> {
  constructor(props: IHardwaresProps) {
    super(props);
    this.state = {
      hardware: null,
      type: 'cpu',
      from: 1,
      count: 21,
      itemsPerPage: 21,
      searchValue: '',
      displayAddRequestOpen: false,
    };

    this.onSelect = this.onSelect.bind(this);
    this.getHardwares = this.getHardwares.bind(this);
    this.onSearchInput = this.onSearchInput.bind(this);
    this.getHardwaresAfterInput = debounce(this.getHardwares, 300);
  }

  public showAddHardwareModal = () => {
    this.setState({ displayAddRequestOpen: true });
  };
  public hideAddHardwareModal = () => {
    this.setState({ displayAddRequestOpen: false });
  };
  public handleAddHardwareWindow = () => {
    this.state.displayAddRequestOpen ? this.hideAddHardwareModal() : this.showAddHardwareModal();
  };

  public hardwareTypes = [
    { title: 'Processor', value: 'cpu' },
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
      searchValue: '',
    });
    const meta = {
      count: this.state.count,
      from: this.state.from,
      type: e.target.value as hardwareTypes,
    };
    this.getHardwares(meta);
  }

  public getHardwares(meta: { count: number; from: number; searchValue?: string; type?: hardwareTypes }): void {
    this.setState({ count: meta.count, from: meta.from });
    const { count, from, type = this.state.type, searchValue = this.state.searchValue } = meta;
    this.props.getHardwares({ type, from, count, searchValue });
  }

  public onHardwareChoose(hardware: Record<string, ReactText>) {
    this.setState({ hardware });
  }

  public componentDidMount(): void {
    this.getHardwares({ count: 21, from: 0 });
  }

  // this is debounced variant;
  public getHardwaresAfterInput: (meta: {
    count: number;
    from: number;
    type?: hardwareTypes;
    searchValue: string;
  }) => void;

  public onSearchInput(e: ChangeEvent<HTMLInputElement>): void {
    const value: string = e.target.value;
    this.setState({
      searchValue: value,
    });
    const { from, count } = this.state;
    this.getHardwaresAfterInput({ from, count, searchValue: value });
  }

  public render(): JSX.Element {
    const { hardwares } = this.props.state;
    return (
      <PageComponent selectedMenuItemNumber={MenuItems.Hardwares}>
        <div className={styles.hardwaresRoot}>
          <div className={styles.hardwaresMetaForm}>
            <FormControl variant="outlined">
              <InputLabel id="hardware-label" className={styles.selectLabel}>
                Hardware
              </InputLabel>
              <Select
                className={styles.hardwareFormItem}
                labelId="hardware-label"
                value={this.state.type}
                onChange={this.onSelect}
                label="Hardware"
              >
                {this.hardwareTypes.map((hardware) => (
                  <MenuItem value={hardware.value} key={hardware.value}>
                    {hardware.title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              label="Search"
              variant="outlined"
              className={concatClassNames(styles.hardwareFormItem, styles.searchInput)}
              value={this.state.searchValue}
              onInput={this.onSearchInput}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            ></TextField>
          </div>
          <div className={styles.contentWrapper}>
            <div className={styles.mainContent}>
              <GridList className={styles.hardwaresList} cellHeight={80} cols={3}>
                {hardwares.map((hardware) => (
                  <GridListTile
                    className={styles.hardwareItem}
                    key={hardware.id}
                    onClick={() => this.props.setHardware(hardware)}
                  >
                    <div
                      className={concatClassNames(
                        styles.hardwareContainer,
                        hardware.id === this.state.hardware?.id ? styles.activeContainer : null
                      )}
                    >
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
              <div className={styles.addRequestBlockContainer}>
                {this.state.displayAddRequestOpen ? (
                  <ModalAddRequest onClose={this.hideAddHardwareModal} requestType={UserRequestedType.hardware} />
                ) : null}
                <div className={styles.addRequestBlock}>
                  <p>
                    If you have not found the hardware you need, you can send a request to the administrator by this{' '}
                    <Link onClick={this.handleAddHardwareWindow} className={styles.linkRequest}>
                      link
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.asideContent}>
              <div className={styles.hardwareBar}>
                <h2 className={styles.hardwareHeader}>Selected hardware</h2>
                <div className={styles.divider} />
                <HardwareSidebarView hardware={this.props.state.selectedHardware} type={this.state.type} />
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
