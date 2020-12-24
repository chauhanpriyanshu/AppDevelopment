import React, { useState } from "react";
import { ImageBackground, FlatList, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity } from "react-native";
import { BottomNavigation, Text, Button } from 'react-native-paper';

import AppNavigator from './AppNavigator'

const HomeRoute = () => <Text>Home</Text>;
const CartRoute = () => <Text>Cart</Text>;
const OptRoute = () => <Text>cart</Text>;



const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Pulses",
    image: { uri: "https://lh3.googleusercontent.com/proxy/HF9MCL13pQvRpeAZujScyxC9woFyCAnPlJKUp0Iy2hw6SSdZNu3n6Daj78aQYC-UnJBeeG28ePOlDQ-xT5KW5raMXIv-_DAH7ehs0Y-RtCBTP52aTcbKrls_UAFyg-4ZEa6oWEey1Aulz_ZSEeAYTQIRJ4zMHdmlkng9TN3fj_YVoQYh" }
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Fruits",
    image: { uri: "https://picsum.photos/300/40" }
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Vegetables",
    image: { uri: "https://picsum.photos/300/40" }
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bc",
    title: "First Item",
    image: { uri: "https://picsum.photos/30/40" }
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f64",
    title: "Second Item",
    image: { uri: "https://picsum.photos/300/40" }
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d73",
    title: "Third Item",
    image: { uri: "https://picsum.photos/300/40" }
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bx",
    title: "First Item",
    image: { uri: "https://picsum.photos/300/40" }
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f65",
    title: "Second Item",
    image: { uri: "https://picsum.photos/300/40" }
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d76",
    title: "Third Item",
    image: { uri: "https://picsum.photos/300/40" }
  },
];

//const image = { uri: "https://picsum.photos/300/40" };

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
      {/* <Text style={styles.title}>{item.title}</Text> */}
  </TouchableOpacity>
);

const App = () => {

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'main', title: 'Home', icon: 'home' },
    { key: 'option', title: 'Browse', icon: 'grid'},
    { key: 'cart', title: 'Cart', icon: 'cart' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    main: HomeRoute,
    option:OptRoute,
    cart: CartRoute,
  });


  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={ styles.boxes }
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppNavigator />
      {/* <Button onPress={() => console.log('Pressed')}>Click Me</Button> */}
      {/* <FlatList
        data={DATA}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      /> */}
    {/* <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  boxes:{
    flex: 1,
    backgroundColor: '#ff0000',
  },
});

export default App;