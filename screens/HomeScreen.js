import React from "react";
import { Text, View, StyleSheet } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

const HomeScreen = props => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
};

HomeScreen.navigationOptions = () => {
  return {
    tabBarIcon: () => <Icon name="home" size={25} />
  };
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: 400,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default HomeScreen;
