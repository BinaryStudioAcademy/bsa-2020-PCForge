import React from 'react';
import {Header, Left, Button, Icon, Body, Title} from 'native-base';
import {StackHeaderProps} from '@react-navigation/stack';
import * as DrawerActions from 'components/basicComponent/Drawer/actions';
import {connect} from 'react-redux';
import {drawerActions} from '../Drawer/actionTypes';

export interface Props extends StackHeaderProps {
  openDrawerAction: () => drawerActions;
  closeDrawerAction: () => drawerActions;
}

const AppTitle = (props: Props) => {
  const title = props.scene.route.name;
  const onMainIconClick = () => {
    props.openDrawerAction();
    // props.navigation.goBack();
  };
  return (
    <Header>
      {props.navigation.canGoBack() ? (
        <Left>
          <Button transparent>
            <Icon type="MaterialIcons" name="menu" onPress={onMainIconClick} />
          </Button>
        </Left>
      ) : null}
      <Body>
        <Title>{title}</Title>
      </Body>
    </Header>
  );
};

const mapDispatchToProps = DrawerActions;

export default connect(null, mapDispatchToProps)(AppTitle);
