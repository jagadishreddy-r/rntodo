import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  CheckBox,
  Alert,
  Vibration
} from "react-native";
import { observer } from "mobx-react";
//import { CheckBox } from "react-native-elements";
import AddTodo from "../../AddTodo";
import i18n from "../../../../I18n";
import { DeleteIcon, CheckText, Div, Textstyle } from "./StyledComponents";
@observer
class TodoItem extends Component {
  state = {
    isLongPressed: false
  };
  SampleFunction = () => {
    Alert.alert(
      i18n.t("Delete"),
      i18n.t("Heading") + " " + this.props.item.description,
      [
        {
          text: "",
          onPress: () => console.log("Ask me later pressed")
        },
        {
          text: i18n.t("Cancel"),
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: i18n.t("Ok"),
          onPress: () => this.props.todoStore.deleteTodo(this.props.item)
        }
      ],
      { cancelable: false }
    );
  };
  handleCheck = () => {
    this.props.item.toggleTaskStatus();
  };
  updateHandle = value => {
    if (value.trim() != "") {
      this.props.item.updateTodoDescription(value);
    }
    this.setState({
      isLongPressed: false
    });
  };
  render() {
    return (
      <Div>
        <CheckText>
          <CheckBox
            value={this.props.item.status}
            onValueChange={() => this.props.item.toggleTaskStatus()}
          />

          {this.state.isLongPressed && (
            <AddTodo
              functionToCall={this.updateHandle}
              defaultText={this.props.item.description}
            />
          )}
          {!this.state.isLongPressed && (
            <TouchableOpacity
              onLongPress={() => {
                Vibration.vibrate(100);
                this.setState({ isLongPressed: true });
              }}
            >
              {this.props.item.status && (
                <Textstyle>{this.props.item.description}</Textstyle>
              )}
              {!this.props.item.status && (
                <Text>{this.props.item.description}</Text>
              )}
            </TouchableOpacity>
          )}
        </CheckText>
        <View>
          <TouchableOpacity activeOpacity={0.5} onPress={this.SampleFunction}>
            <DeleteIcon source={require("./delete.png")} />
          </TouchableOpacity>
        </View>
      </Div>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  deleteicon: {
    height: 30,
    width: 30
  },
  checktext: {
    flexDirection: "row",
    alignItems: "center"
  },
  text: {
    textAlign: "center",
    textDecorationLine: "line-through"
  }
});
export default TodoItem;
