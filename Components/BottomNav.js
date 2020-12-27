import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

const HomeRoute = () => <Text>Home</Text>;

const CartRoute = () => <Text>Cart</Text>;

const OptRoute = () => <Text>cart</Text>;

const BottomNav = () => {
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

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default BottomNav;