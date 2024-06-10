import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/home.js'
import 'react-native-gesture-handler';


const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <StatusBar hidden={true} />
      <Home style={styles.home}/>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
    <Stack.Screen name="Home" component={HomeScreen} />
  </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
  },
  home:{
    flex: 1,
    flexGrow: 1,
    height: "100px"
  },
});
