import React, { useRef, useState } from "react";
import { Button, DrawerLayoutAndroid, Text, StyleSheet, View, SafeAreaView, TouchableOpacity } from "react-native";
import FLst from './Flatlist';
import BottomNav from './BottomNav';



const Drwr = () => {
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState("left");
  const changeDrawerPosition = () => {
    if (drawerPosition === "left") {
      setDrawerPosition("right");
    } else {
      setDrawerPosition("left");
    }
  };

  class TopBar extends React.Component {
    render() {
      return (
        <View style={styles.container2}>
          <TouchableOpacity style={styles.btncls} onPress={() => drawer.current.openDrawer()}><Text style={styles.btntxt}>Drawer</Text></TouchableOpacity>
          <Text>TopBar</Text>
        </View>
      );
    }
  }

  class BottomBar extends React.Component {
    render() {
      return (
        <View style={styles.container3}>
          {/* <Button title="One" style={{color: 'red', marginTop: 10, padding: 10}} /> */}
          <TouchableOpacity style={styles.btncls}><Text style={styles.btntxt}>Home</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btncls}><Text style={styles.btntxt}>Browse</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btncls}><Text style={styles.btntxt}>Cart</Text></TouchableOpacity>
        </View>
      );
    }
  }

  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <Text style={styles.paragraph}>--Drawer content would be added here-- (Note by: Priyanshu)</Text>
      <TouchableOpacity style={styles.btncls} onPress={() => drawer.current.closeDrawer()}><Text style={styles.btntxt}>Close Drawer</Text></TouchableOpacity>
      {/* <Button title="Close Drawer" onPress={() => drawer.current.closeDrawer()} /> */}
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}
    >
      <SafeAreaView style={styles.container}>
        <TopBar />
        {/* <Button
          title="Open drawer"
          onPress={() => drawer.current.openDrawer()}
        /> */}
        <FLst />
        <BottomBar />
      </SafeAreaView>

    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 0
  },
  container2: {
    alignSelf: 'stretch',
    height: 52,
    flexDirection: 'row', // row
    backgroundColor: '#212F3C',
    alignItems: 'center',
    justifyContent: 'space-between', // center, space-around
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 60,
    paddingBottom: 25,
  },
  container3: {
    alignSelf: 'stretch',
    height: 52,
    flexDirection: 'row', // row
    backgroundColor: '#212F3C',
    alignItems: 'center',
    justifyContent: 'space-between', // center, space-around
    paddingLeft: 10,
    paddingRight: 10
  },
  navigationContainer: {
    backgroundColor: "#ecf0f1"
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: "center"
  },
  btncls: {
    width: 110,
    height: 40,
    backgroundColor: '#797D7F',
    alignItems: 'center',
    paddingTop: 10
  },
  btntxt:{
    color: "#E5E7E9"
  },
});

export default Drwr;