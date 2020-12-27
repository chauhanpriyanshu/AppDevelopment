import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import TestScreen from './test'
const DrawerNavigator = createDrawerNavigator({
  One: TestScreen,
  Two: TestScreen
});

export default createAppContainer(
  createSwitchNavigator({
    // Additional routes such as a login route could
    // be added here:
    // Login: LoginNavigator,
    Main: DrawerNavigator
  })
);
