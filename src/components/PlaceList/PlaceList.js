import React from "react";
import ListItem from "../ListItem/ListItem";
import { StyleSheet, View, FlatList } from "react-native";

const placeList = props => {
  return (
    <FlatList
      style={styles.listContainer}
      data={props.places}
      renderItem={info => (
        <ListItem
          placeName={info.item.placeName}
          placeImage={info.item.placeImage}
          onItemPressed={() => props.onItemDeleted(info.item.key)}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});
export default placeList;
