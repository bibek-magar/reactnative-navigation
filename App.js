import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import HomeScreen from "./screens/HomeScreen";
import DashboardScreen from "./screens/DashboardScreen";
import AccountScreen from "./screens/AccountScreen";
import SigninScreen from "./screens/SigninScreen";
import SignupScreen from "./screens/SignupScreen";

// const switchNavigator = createSwitchNavigator({
//   ResolveAuth: ResolveAuthScreen,
//   loginFlow: createStackNavigator({
//     Signup: SignupScreen,
//     Signin: SigninScreen
//   }),
//   mainFlow: createBottomTabNavigator({
//     trackListFlow: createStackNavigator({
//       TrackList: TrackListScreen,
//       TrackDetail: TrackDetailScreen
//     }),
//     TrackCreate: TrackCreateScreen,
//     Account: AccountScreen
//   })
// });

const AppNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signin: SigninScreen,
    Signup: SignupScreen
  }),
  mainFlow: createBottomTabNavigator({
    Home: HomeScreen,
    Dashboard: DashboardScreen,
    Account: AccountScreen
  }),
  initialRouteName: "Home"
});
const App = createAppContainer(AppNavigator);

export default () => {
  return <App />;
};
