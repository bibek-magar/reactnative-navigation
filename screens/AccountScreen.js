import React from "react";
import { Text, Button } from "react-native";

const AccountScreen = props => {
  return (
    <>
      <Text>Account Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => props.navigation.navigate("Home")}
      />
      <Button title="Go back" onPress={() => props.navigation.goBack()} />
    </>
  );
};

export default AccountScreen;
