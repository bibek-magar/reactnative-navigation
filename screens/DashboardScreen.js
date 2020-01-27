import React from "react";
import { Text, StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const DashboardScreen = props => {
  return (
    <View style={styles.container}>
      <Text>Dashboard Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: 400,
    justifyContent: "center",
    alignItems: "center"
  }
});

DashboardScreen.navigationOptions = () => {
  return {
    tabBarIcon: () => <Icon name="eye" size={25} />
  };
};

export default DashboardScreen;
