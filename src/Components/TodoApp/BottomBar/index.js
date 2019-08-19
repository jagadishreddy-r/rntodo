import React, { Component } from "react";

import { BottomNavigation, Text } from "react-native-paper";

const StateRoute = () => <Text />;

const ClientRoute = () => <Text />;

const SettingRoute = () => <Text />;
class BottomBar extends Component {
  constructor(props) {
    super(props);
    const { i18n } = props;
    this.state = {
      check: false,
      index: 0,
      routes: [
        {
          key: "all",
          title: i18n.t("All"),
          value: "ALL",
          icon: require("./download.png"),
          color: "#3F51B5"
        },
        {
          key: "completed",
          title: i18n.t("Completed"),
          value: "COMPLETED",
          icon: require("./tick.png"),
          color: "#3F51B5"
        },
        {
          key: "active",
          title: i18n.t("Active"),
          value: "ACTIVE",
          icon: require("./unlocked.png"),
          color: "#FF0000"
        }
      ]
    };
  }

  // Vi sao ham 1 tham so => khi goi khong co tham so
  // truyen index vao setState co {} ????
  _handleIndexChange = index => {
    this.setState({ index });

    this.props.todoStore.changeFilter(this.state.routes[index].value);
  };

  _renderScene = BottomNavigation.SceneMap({
    all: StateRoute,
    completed: ClientRoute,
    active: SettingRoute
  });

  render() {
    return (
      <>
        <BottomNavigation
          navigationState={this.state}
          onIndexChange={this._handleIndexChange}
          renderScene={this._renderScene}
        />
      </>
    );
  }
}

export default BottomBar;
