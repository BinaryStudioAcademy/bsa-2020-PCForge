import React, { useState } from "react";
import { ListRenderItemInfo, TouchableOpacity, Image } from "react-native";
import { News } from "common/models/news.model";
import { CardItem, Card, Body, Text } from "native-base";
import { formatDateFromNow } from "common/helpers/global.helper";
import styles from "./styles";

const defaultImageUrl =
  'https://s.dou.ua/img/announces/2_1_6Y7TRbx_02W4dCl_o369KF6.png';

export const NewsItem = (newsItem: ListRenderItemInfo<News>) => {
    const {item} = newsItem;
    const {image, title, createdAt, updatedAt} = item;
    const [imageUrl, setImageUrl] = useState(image);
    return (
      <TouchableOpacity>
        <Card transparent style={styles.newsCard}>
          <CardItem cardBody style={styles.imageCardItem}>
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
              <Text style={styles.newsText}>{title}</Text>
              <Text style={styles.dateText}>
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