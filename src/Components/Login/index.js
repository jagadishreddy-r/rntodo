import React, { Component } from "react";
import {
  Button,
  TextInput,
  View,
  StyleSheet,
  ActivityIndicator,
  Alert,
  AsyncStorage
} from "react-native";
import { Div, EditText } from "./StyledComponents";
import { Actions, ActionConst } from "react-native-router-flux";
import i18n from "../../I18n";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      loading: false,
      islogin: false
    };
  }

  _storeData = async value => {
    try {
      await AsyncStorage.setItem("isLogin", value);
    } catch (error) {
      // Error saving data
    }
  };

  onLogin() {
    this.setState({ loading: true });
    setTimeout(() => {
      if (
        this.state.username === "jagadish" &&
        this.state.password === "jagadish"
      ) {
        this._storeData("true");
        Actions.home({ type: ActionConst.REPLACE });
        this.setState({ loading: false });
      } else {
        this._storeData(false);
        this.setState({ loading: false });
        Alert.alert("invalid");
      }
    }, 2000);
  }

  render() {
    return (
      <Div>
        {this.state.loading && (
          <ActivityIndicator size="large" color="#0000ff" />
        )}
        {!this.state.loading && (
          <>
            <EditText
              value={this.state.username}
              onChangeText={username => this.setState({ username })}
              placeholder={i18n.t("Username")}
            />

            <EditText
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
              placeholder={i18n.t("Password")}
              secureTextEntry={true}
            />

            <Button title={i18n.t("Login")} onPress={this.onLogin.bind(this)} />
          </>
        )}
      </Div>
    );
  }
}
