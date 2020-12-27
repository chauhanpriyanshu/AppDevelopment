import React, { useRef, useState } from "react";
import { Button, DrawerLayoutAndroid, Text, StyleSheet, View, SafeAreaView } from "react-native";
import FLst from './Components/Flatlist';
import Drwr from './Components/Drawer';
import DrwrBtn from './Components/DrawerButton';

export default function App() {
  return (
      <Drwr />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});