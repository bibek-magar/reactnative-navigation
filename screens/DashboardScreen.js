import React from "react";
import { Text, Button } from "react-native";

const DashboardScreen = props => {
  console.log(props.navigation.isFocused());
  let id = props.navigation.getParam("id");
  console.log(id);

  return (
    <>
      <Text>Dash Board screen</Text>
      <Button
        title="Go to Home"
        onPress={() => props.navigation.navigate("Home")}
      />
      <Button
        title="Go to Account"
        onPress={() => props.navigation.navigate("Account")}
      />
      <Button title="Go back" onPress={() => props.navigation.goBack()} />
    </>
  );
};

export default DashboardScreen;
