import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./screens/HomeScreen";
import DashboardScreen from "./screens/DashboardScreen";
import AccountScreen from "./screens/AccountScreen";

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Dashboard: DashboardScreen,
  Account: AccountScreen
});

export default createAppContainer(AppNavigator);
