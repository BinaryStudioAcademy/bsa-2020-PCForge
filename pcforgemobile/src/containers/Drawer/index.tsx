import React from 'react';
import {DrawerLayoutAndroid, Text, View, ImageBackground} from 'react-native';
import styles from './styles';
import * as drawerActions from './actions';
import {signOut} from 'containers/Auth/actions';
import {RootState} from 'redux/rootReducer';
import {DrawerProps} from './interfaces';
import {connect} from 'react-redux';
import {Button, Icon} from 'native-base';
import {routes} from 'routing';
const defaultImage = require('assets/images/userImagePlaceholder.png');

interface State {
  useDefaultImage: boolean;
}

class Drawer extends React.PureComponent<DrawerProps, State> {
  constructor(props: DrawerProps) {
    super(props);
    this.onOpen = this.onOpen.bind(this);
    this.onClose = this.onClose.bind(this);
    this.onAvatarLoadingError = this.onAvatarLoadingError.bind(this);
    this.state = {useDefaultImage: false};
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

  public onAvatarLoadingError() {
    if (!this.state.useDefaultImage) {
      this.setState({useDefaultImage: true});
    }
  }

  public onChangeRoute(routeName: string): void {
    this.ref?.closeDrawer();
    setTimeout(() => {
      this.props.navigate(routeName);
    });
  }

  public render(): JSX.Element {
    const {useDefaultImage} = this.state;
    if (this.props.state.open) {
      this.ref?.openDrawer();
    }
    const {avatar, name, email} = this.props.user || {};
    const navigationView = (
      <View style={styles.root}>
        <ImageBackground
          source={useDefaultImage ? defaultImage : {uri: avatar || 'invalid'}}
          style={styles.userImage}
          onError={() => this.onAvatarLoadingError()}>
          <View style={styles.userDataContainer}>
            <Text style={styles.userName}>{name}</Text>
            <Text style={styles.userEmail}>{email}</Text>
          </View>
        </ImageBackground>
        {routes.map((routeProps) => {
          if (routeProps.initialParams.showInDrawer) {
            return (
              <Button
                iconLeft
                onPress={() => this.onChangeRoute(routeProps.name)}
                block
                style={styles.routeListItem}
                key={routeProps.name}>
                {
                  <Icon
                    {...routeProps.initialParams.iconProps}
                    style={styles.icon}
                  />
                }
                <Text style={styles.routeText}>{routeProps.name}</Text>
              </Button>
            );
          }
          return null;
        })}
        <Button
          iconLeft
          onPress={() => {
            this.props.signOut();
            setTimeout(() => {
              this.ref?.closeDrawer();
              this.props.navigate('Login');
            });
          }}
          block
          style={styles.routeListItem}>
          {<Icon type="Octicons" name="sign-out" style={styles.icon} />}
          <Text style={styles.routeText}>Sign out</Text>
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
        renderNavigationView={() => navigationView}
        drawerBackgroundColor="#25292e"
        style={styles.root}>
        {this.props.children}
      </DrawerLayoutAndroid>
    );
  }
}

export const mapDispatchToProps = {...drawerActions, signOut};
export const mapStateToProps = (state: RootState) => {
  return {
    user: state.authReducer.user,
    state: state.drawerReducer,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Drawer);
