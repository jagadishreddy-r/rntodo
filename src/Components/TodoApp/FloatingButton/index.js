import React, { Component } from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
export default class FloatingButton extends Component {
  SampleFunction = () => {
    this.props.todoStore.changeshowTodos();
  };

  render() {
    return (
      <>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={this.SampleFunction}
          style={styles.TouchableOpacityStyle}
        >
          <Image
            source={{
              uri:
                "https://reactnativecode.com/wp-content/uploads/2017/11/Floating_Button.png"
            }}
            style={styles.FloatingButtonStyle}
          />
        </TouchableOpacity>
      </>
    );
  }
}

const styles = StyleSheet.create({
  TouchableOpacityStyle: {
    position: "absolute",
    width: 50,
    height: 50,
    zIndex: 10,
    right: 30,
    bottom: 90
  },

  FloatingButtonStyle: {
    resizeMode: "contain",
    width: 50,
    height: 50
  }
});
