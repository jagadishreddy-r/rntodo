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
import { Actions, ActionConst } from "react-native-router-flux";

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
      <View style={styles.container}>
        {this.state.loading && (
          <ActivityIndicator size="large" color="#0000ff" />
        )}
        {!this.state.loading && (
          <>
            <TextInput
              value={this.state.username}
              onChangeText={username => this.setState({ username })}
              placeholder={"Username"}
              style={styles.input}
            />

            <TextInput
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
              placeholder={"Password"}
              secureTextEntry={true}
              style={styles.input}
            />

            <Button title={"Login"} onPress={this.onLogin.bind(this)} />
          </>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1"
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10
  }
});
