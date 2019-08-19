import React, { Component } from "react";

import { Text, View, StyleSheet, AsyncStorage } from "react-native";
import { Actions, ActionConst } from "react-native-router-flux";
import { Title, Div } from "./StyledComponent";
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
      <Div>
        <Title>TODOAPP</Title>
      </Div>
    );
  }
}

export default Splash;
