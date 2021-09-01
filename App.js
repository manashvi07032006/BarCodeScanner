import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Facebook from './screens/fb';
import Instagram from './screens/in';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

export default class App extends Component {
  render(){
  return (
    <View style={styles.container}>
      <Text style={{fontSize:50, color:"purple", fontWeight:"bold", textDecorationLine:"underline", marginBottom:20}}>BUZZ APP</Text>
      <AppContainer/>
    </View>
  );
  }
}
const TabNavigator = createBottomTabNavigator({
  Facebook: {screen:Facebook},
  Instagram: {screen: Instagram}
})
const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    alignSelf:"center",
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});