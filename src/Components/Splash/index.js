import React, { Component } from "react";

import { Text, View, StyleSheet, AsyncStorage } from "react-native";
import { Actions, ActionConst } from "react-native-router-flux";
class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSplashing: true
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this._retrieveData();
    }, 2000);
  }

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem("isLogin");
      if (value === "true") {
        Actions.home({ type: ActionConst.REPLACE });
      } else {
        Actions.login({ type: ActionConst.REPLACE });
      }
    } catch (error) {
      // Error retrieving data
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textstyle}>TODOAPP</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textstyle: {
    fontSize: 50,
    fontWeight: "bold",
    color: "red"
  }
});
export default Splash;
