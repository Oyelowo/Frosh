import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends Component {
  state = {
    placeName: '',
    places: []
  }

  placeNameChangedHandler = (value) => {
    this.setState({ placeName: value })
  }

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }
    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
      };
    });
  };



  

  render() {
    const placesOutput = this.state.places.map((place, i) => (
      <Text key={i}>{place}</Text>
    ))
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.placeInput}
            placeholder="Nice places"
            value={this.state.placeName}
            onChangeText={this.placeNameChangedHandler}
          />
          <Button title="ADD" style={styles.placeButton} onPress={this.placeSubmitHandler} />
        </View>
        <View>{placesOutput}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  inputContainer: {
    // flex: 1,
    width: "100%",
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center'
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  }
});
