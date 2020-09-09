import React, {useState} from 'react';
import {ListRenderItemInfo, Image} from 'react-native';
import styles from './styles';
import * as HomeActions from './actions';
import {RootState} from 'redux/rootReducer';
import {connect} from 'react-redux';
import {IHomeProps} from './interfaces';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {Container, Card, CardItem, Body, Text} from 'native-base';
import {News} from 'common/models/news.model';
import {formatDateFromNow} from 'common/helpers/global.helper';

const defaultImageUrl =
  'https://s.dou.ua/img/announces/2_1_6Y7TRbx_02W4dCl_o369KF6.png';

export const NewsItem = (newsItem: ListRenderItemInfo<News>) => {
  const {item} = newsItem;
  const {image, title, createdAt, updatedAt} = item;
  const [imageUrl, setImageUrl] = useState(image);
  return (
    <TouchableOpacity>
      <Card transparent style={styles.newsCard}>
        <CardItem cardBody>
          <Image
            source={{uri: imageUrl}}
            style={styles.newsImage}
            onError={() =>
              imageUrl !== defaultImageUrl ? setImageUrl(defaultImageUrl) : null
            }
          />
        </CardItem>
        <CardItem>
          <Body>
            <Text>{title}</Text>
            <Text note style={styles.dateText}>
              {updatedAt
                ? formatDateFromNow(updatedAt)
                : formatDateFromNow(createdAt)}
            </Text>
          </Body>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
};

class Home extends React.PureComponent<IHomeProps> {
  public componentDidMount() {
    this.props.getNewsRequest();
  }

  public render(): JSX.Element {
    const {news} = this.props.state;
    return (
      <Container style={styles.root}>
        <FlatList
          data={news}
          renderItem={(props) => <NewsItem {...props} />}
          keyExtractor={(newsItem: News) => String(newsItem.id)}
        />
      </Container>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    state: state.homeReducer,
  };
};

const mapDispatchToProps = HomeActions;

export default connect(mapStateToProps, mapDispatchToProps)(Home);
