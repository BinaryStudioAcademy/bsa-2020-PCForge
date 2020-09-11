import React from 'react';
import * as HomeActions from './actions';
import {RootState} from 'redux/rootReducer';
import {connect} from 'react-redux';
import {IHomeProps} from './interfaces';
import {FlatList} from 'react-native-gesture-handler';
import {Container} from 'native-base';
import {News} from 'common/models/news.model';
import {NewsItem} from './NewsItem';
import styles from './styles';

class Home extends React.PureComponent<IHomeProps> {
  public componentDidMount() {
    this.props.getNewsRequest();
  }

  public render(): JSX.Element {
    const {news} = this.props.state;
    return (
      <Container style={styles.root}>
        <FlatList
          style={styles.list}
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
