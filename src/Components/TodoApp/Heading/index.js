import React, { Component } from "react";
import { Header, Text, Button } from "react-native-elements";
import { AsyncStorage, Picker } from "react-native";
import { Actions, ActionConst } from "react-native-router-flux";

import i18n from "../../../I18n/index";
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
    const { i18n } = this.props;
    return (
      <>
        <Header
          placement="left"
          leftComponent={
            <Text style={{ color: "#fff", fontWeight: "bold", marginLeft: 20 }}>
              {i18n.t("Heading")}
            </Text>
          }
          centerComponent={
            <Picker
              selectedValue={this.props.language}
              style={{ height: 50, width: 100 }}
              onValueChange={(itemValue, itemIndex) =>
                this.props.languageChange(itemValue)
              }
            >
              <Picker.Item label="English" value="en" />
              <Picker.Item label="తెలుగు" value="tel" />
              <Picker.Item label="हिंदी" value="hin" />
            </Picker>
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
