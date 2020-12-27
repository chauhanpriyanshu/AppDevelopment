import React, { useRef, useState } from "react";
import { Button, DrawerLayoutAndroid, StyleSheet, View, SafeAreaView } from "react-native";
import FLst from './Flatlist';
import { BottomNavigation, Text } from 'react-native-paper';


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

  // Bottom Nav Starts

const HomeRoute = () => <Text>Home</Text>;

const CartRoute = () => <Text>Cart</Text>;

const OptRoute = () => <Text>cart</Text>;

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'main', title: 'Home', icon: 'home' },
    { key: 'option', title: 'Browse', icon: 'grid'},
    { key: 'cart', title: 'Cart', icon: 'cart' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    main: HomeRoute,
    option: OptRoute,
    cart: CartRoute,
  });

  // Bottom Nav Ends




  class TopBar extends React.Component {
    render() {
      return (
        <View style={styles.container2}>
          <Button
          title="Open drawer"
          onPress={() => drawer.current.openDrawer()}
        />
          <Text>TopBar</Text>
        </View>
      );
    }
  }


  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <Text style={styles.paragraph}>I'm in the Drawer!</Text>
      <Button
        title="Close drawer"
        onPress={() => drawer.current.closeDrawer()}
      />
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
        <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
      </SafeAreaView>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25
  },
  container2: {
    alignSelf: 'stretch',
    height: 52,
    flexDirection: 'row', // row
    backgroundColor: 'yellow',
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
  }
});

export default Drwr;