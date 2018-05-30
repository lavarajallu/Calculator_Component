/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
//import { Provider } from 'react-redux';  //this is based on store provider 
import CalculatorMainPage from '@src/components/CalculatorMainPage'
//import store from '@src/Store.js'  // this is store the state values
export default class App extends Component {
  render() {
    // {/* <Provider store = {store}>. */}
    //   <View style={styles.container}>
    //      <CalculatorMainPage/>
    //   </View>
    //   {/* </Provider> */} this is combined data from store 
    return ( 
      <View style={styles.container}>
         <CalculatorMainPage/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
});
