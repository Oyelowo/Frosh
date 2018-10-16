import React, { Component } from "react";
import { View, Text, Dimensions } from "react-native";

class SideDrawer extends Component {
 

  render() {
    return (
      <View stlye= {{width: Dimensions.get("windows").width *0.7}}>
        <Text> SideDrawer </Text>
      </View>
    );
  }
}

export default SideDrawer;
