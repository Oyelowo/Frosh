import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import PlaceList from "../../components/PlaceList/PlaceList";

class FindPlaceScreen extends Component {
  itemSelectedHandler = key => {
    const selectedPlace = this.props.places.find(place => place.key === key);
    this.props.navigator.push({
      screen: "awesome-places.PlaceDetailScreen",
      title: selectedPlace.placeName,
      passProps: {
        selectedPlace
      }
    });
  };

  render() {
    return (
      <View>
        <PlaceList
          places={this.props.places}
          onItemSelected={this.itemSelectedHandler}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  places: state.places.places
});

export default connect(mapStateToProps)(FindPlaceScreen);
