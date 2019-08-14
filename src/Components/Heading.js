import React, { Component } from "react";
import { Header, Text, Button } from "react-native-elements";
import { AsyncStorage } from "react-native";
import { Actions, ActionConst } from "react-native-router-flux";
import i18n from "../I18n/index.js";

export default class Heading extends Component {
  async removeItemValue(key) {
    try {
      await AsyncStorage.removeItem(key);
      Actions.login({ type: ActionConst.REPLACE });

      return true;
    } catch (exception) {
      return false;
    }
  }
  render() {
    return (
      <>
        <Header
          placement="left"
          leftComponent={
            <Text style={{ color: "#fff", fontWeight: "bold", marginLeft: 20 }}>
              TodoApp
            </Text>
          }
          rightComponent={
            <Button
              title={i18n.t("signOut")}
              onPress={() => {
                this.removeItemValue("isLogin");
              }}
            />
          }
        />
      </>
    );
  }
}
