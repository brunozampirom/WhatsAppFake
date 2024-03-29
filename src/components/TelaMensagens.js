import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { TabViewAnimated, SceneMap, TabBar } from "react-native-tab-view";

const logo = require("../../img/logo.png");

const Conversas = () => (
  <View style={[styles.container, { backgroundColor: "#ff4081" }]} />
);
const Contatos = () => (
  <View style={[styles.container, { backgroundColor: "#673ab7" }]} />
);

export default class TelaMensagens extends Component {
  state = {
    index: 0,
    routes: [{ key: "1", title: "Conversas" }, { key: "2", title: "Contatos" }]
  };
  _handleChangeTab = index => this.setState({ index });
  _renderHeader = props => <TabBar {...props} />;
  _renderScene = SceneMap({
    "1": Conversas,
    "2": Contatos
  });
  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onRequestChangeTab={this._handleChangeTab}
      />
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
