import React, { Component } from "react";
import { Header, Text } from "react-native-elements";

export default class Heading extends Component {
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
        />
      </>
    );
  }
}
