import React, { Component } from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { ClickableDiv, Picture } from "./StyledComponents";
export default class FloatingButton extends Component {
  SampleFunction = () => {
    this.props.todoStore.changeshowTodos();
  };

  render() {
    return (
      <>
        <ClickableDiv activeOpacity={0.5} onPress={this.SampleFunction}>
          <Picture
            source={{
              uri:
                "https://reactnativecode.com/wp-content/uploads/2017/11/Floating_Button.png"
            }}
          />
        </ClickableDiv>
      </>
    );
  }
}
