import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

const SigninScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Login with Facebook   "
        icon={<Icon name="facebook" size={15} color="blue" />}
        iconRight
        type="outline"
        style={styles.facebookButton}
        onPress={() => navigation.navigate("Home")}
      />
      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
        <Text style={styles.signup}>Dont have an account? Sign up.</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 200
  },
  signup: {
    color: "blue"
  },
  facebookButton: {
    color: "red"
  }
});

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false
  };
};

export default SigninScreen;
