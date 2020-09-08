import React from 'react';
import { View, Text, Header, Left, Button, Icon, Body, Title, Right } from 'native-base';
import { StackHeaderProps, StackHeaderInterpolationProps } from '@react-navigation/stack';

export interface Props extends StackHeaderProps {
  
}

const AppTitle = (props: Props) => {
  const title = props.scene.route.name;
  const onGoBack = () => {
    props.navigation.goBack();
  }
  return (
    <Header>
      { props.navigation.canGoBack() ?
        <Left>
          <Button transparent>
            <Icon type={'MaterialIcons'} name="arrow-back" onPress={onGoBack} />
          </Button>
        </Left> : null
      }
      <Body>
        <Title>{title}</Title>
      </Body>
    </Header>
  )
}

export default AppTitle;
