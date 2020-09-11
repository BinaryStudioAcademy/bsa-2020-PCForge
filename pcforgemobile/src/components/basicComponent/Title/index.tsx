import React from 'react';
import {Header, Left, Button, Icon, Body, Title} from 'native-base';
import * as DrawerActions from 'containers/Drawer/actions';
import {connect} from 'react-redux';
import {drawerActions} from '../../../containers/Drawer/actionTypes';

export interface Props {
  openDrawerAction: () => drawerActions;
  closeDrawerAction: () => drawerActions;
  noActions?: boolean;
  navigation: any;
  useGoBack?: boolean;
  scene?: any;
  title?: string;
}

const AppTitle = (props: Props) => {
  const title = props.title || props.scene.route.name;
  const onMainIconClick = () => {
    if (props.useGoBack) {
      props.navigation.goBack();
    }
    if (!props.useGoBack) {
      props.openDrawerAction();
    }
  };
  return (
    <Header>
      {!props.noActions && props.useGoBack && props.navigation.canGoBack() && (
        <Left>
          <Button transparent onPress={onMainIconClick} rounded>
            <Icon type="MaterialIcons" name="arrow-back" />
          </Button>
        </Left>
      )}
      {!props.noActions && !props.useGoBack && props.navigation.canGoBack() && (
        <Left>
          <Button transparent onPress={onMainIconClick} rounded>
            <Icon type="MaterialIcons" name="menu" />
          </Button>
        </Left>
      )}
      <Body>
        <Title>{title}</Title>
      </Body>
    </Header>
  );
};

const mapDispatchToProps = DrawerActions;

export default connect(null, mapDispatchToProps)(AppTitle);
