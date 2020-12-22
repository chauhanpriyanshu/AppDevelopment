import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';


export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text style={styles.blabla}>Priyanshu was here!</Text>
    //   <Button style={styles.mybtn} title="Some text" />
    //   <StatusBar style="auto" />
    // </View>
    // <View>
    //   <Card>
    //     <Text className={styles.blabla}>Testing Testing</Text>
    //   </Card>
    // </View>

    <Card>
    <Card.Title title="Card Title" subtitle="Card Subtitle" />
    <Card.Content>
      <Title>Card title</Title>
      <Paragraph>Card content</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blabla:{
    color: '#000',
    fontSize: 40,
  },
  mybtn:{
    height: 30,
    width: 100,
    backgroundColor: '#ffffff',
    color: '#000000',
  },
});
