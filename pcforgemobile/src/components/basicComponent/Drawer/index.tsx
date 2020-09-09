import React from 'react';
import {DrawerLayoutAndroid, Text, View} from 'react-native';
import styles from './styles';
import * as drawerActions from './actions';
import {RootState} from 'redux/rootReducer';
import {DrawerProps} from './interfaces';
import {connect} from 'react-redux';
import {Button, Icon} from 'native-base';

class Drawer extends React.PureComponent<DrawerProps> {
  constructor(props: DrawerProps) {
    super(props);
    this.onOpen = this.onOpen.bind(this);
    this.onClose = this.onClose.bind(this);
  }
  public ref: DrawerLayoutAndroid | null = null;
  public onOpen() {
    if (!this.props.state.open) {
      this.props.openDrawerAction();
    }
  }
  public onClose() {
    if (this.props.state.open) {
      this.props.closeDrawerAction();
    }
  }
  public render(): JSX.Element {
    if (this.props.state.open) {
      this.ref?.openDrawer();
    }
    const navigationView = (
      <View>
        <Button
          iconLeft
          light
          transparent
          info
          block
          style={styles.routeListItem}>
          <Icon name="home" type="MaterialIcons" />
          <Text>Home</Text>
        </Button>
        <Button
          iconLeft
          light
          transparent
          danger
          block
          style={styles.routeListItem}>
          <Icon name="home" type="MaterialIcons" />
          <Text>Home</Text>
        </Button>
        <Button
          iconLeft
          light
          transparent
          success
          block
          style={styles.routeListItem}>
          <Icon name="home" type="MaterialIcons" />
          <Text>Home</Text>
        </Button>
      </View>
    );
    return (
      <DrawerLayoutAndroid
        ref={(ref) => (this.ref = ref)}
        onDrawerOpen={this.onOpen}
        onDrawerClose={this.onClose}
        drawerPosition="left"
        drawerWidth={250}
        renderNavigationView={() => navigationView}>
        {this.props.children}
      </DrawerLayoutAndroid>
    );
  }
}

export const mapDispatchToProps = drawerActions;
export const mapStateToProps = (state: RootState) => {
  return {
    state: state.DrawerReducer,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Drawer);
