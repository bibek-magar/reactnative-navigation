import React from "react";
import { Text, Button, StyleSheet, View } from "react-native";

const SignupScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Sign up screen</Text>
      <Button
        title="Go to sign in"
        onPress={() => navigation.navigate("Signin")}
      />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false
  };
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: 200,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default SignupScreen;
