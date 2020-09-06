import React from 'react';
import { View, Text, Header, Left, Button, Icon, Body, Title, Right } from 'native-base';

export interface Props {
  title: string;
}

const AppTitle = (props: Props) => {
  const { title } = props;
  console.log(props)
  return (
    <Header>
      {/* <Left>
        <Button transparent>
          <Icon />
        </Button>
      </Left> */}
      <Body>
        <Title>{title}</Title>
      </Body>
    </Header>
  )
}

export default AppTitle;
