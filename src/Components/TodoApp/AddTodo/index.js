import React, { Component } from "react";

import { TextInput } from "react-native";
import i18n from "../../../I18n";
class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.defaultText
    };
  }

  handleSubmitEdit = event => {
    this.props.functionToCall(event.nativeEvent.text);
  };

  render() {
    return (
      <>
        <TextInput
          style={{
            height: 60,
            paddingLeft: 30,
            borderColor: "gray",
            borderWidth: 0
          }}
          placeholder={i18n.t("What need tobe Done?")}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
          onSubmitEditing={event => {
            this.props.functionToCall(event.nativeEvent.text);
          }}
          autoFocus
        />
      </>
    );
  }
}
export default AddTodo;
