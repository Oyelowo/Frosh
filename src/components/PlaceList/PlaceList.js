import React from 'react';
import ListItem from '../ListItem/ListItem';
import { StyleSheet, View} from 'react-native';


const PlaceList = (props) => {
    const placesOutput = props.places.map((place, i) => (
        <ListItem key={i} placeName={place}  onItemPressed={()=>alert('Item, Pressed,'+ i)}/>
    ))
    return (
        <View style={styles.listContainer}>{placesOutput}</View>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        width: "100%"
    }
});
export default PlaceList;
