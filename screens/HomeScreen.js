import React from "react";

import { Text, Button } from "react-native";

const HomeScreen = props => {
  return (
    <>
      <Text>Home Screen</Text>
      <Button
        title="Go to Dashboard"
        onPress={() => props.navigation.navigate("Dashboard", { id: 241 })}
      />
      <Button
        title="Go to Account"
        onPress={() =>
          props.navigation.navigate("Account", { username: "bee" })
        }
      />
    </>
  );
};

export default HomeScreen;
