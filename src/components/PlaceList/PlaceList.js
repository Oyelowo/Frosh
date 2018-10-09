import React from 'react';
import ListItem from '../ListItem/ListItem';
import { StyleSheet, View, ScrollView } from 'react-native';


const placeList = (props) => {
    const placesOutput = props.places.map((place, i) => (
        <ListItem
            key={i} placeName={place}
            onItemPressed={() => props.onItemDeleted(i)} />
    ))
    return (
        <ScrollViewus style={styles.listContainer}>{placesOutput}</ScrollViewus>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        width: "100%"
    }
});
export default placeList;
