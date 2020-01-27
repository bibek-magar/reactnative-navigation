import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const AccountScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Account Screen</Text>
      <Button title="Sign out" onPress={() => navigation.navigate("Signin")} />
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

AccountScreen.navigationOptions = () => {
  return {
    tabBarIcon: () => <Icon name="user" size={25} />
  };
};
export default AccountScreen;
