import React, {Component} from 'react';
import {Alert, StyleSheet, StatusBar, BackAndroid} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CalculatorResponse from './CalculatorResponse';
import CalculatorButtonsContainer from './CalculatorButtonsContainer';
 
export default class CalculatorMainPage extends Component < {} > {
  constructor() {
    super();
 
    this.state = {
      result: 0
    };
  }
  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.onBackPress);
  }
 
  onBackPress() {
    Alert.alert('Confirm Exit', 'Do you want to quit Calculator?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed!')
      }, {
        text: 'OK',
        onPress: () => BackAndroid.exitApp()
      }
    ])
    return true
  }
 
  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this.onBackPress)
  }
 
  refresh() {
    this.setState({result: 0});
  }
 
  handleButtonPress(button) {
    debugger
    let oldinput = this.state.result,
      lastLetter;
    if (oldinput == 0) {
      oldinput = '';
    }
 
    switch (button) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        this.setState({
          result: oldinput + button
        });
        break;
      case "+":
      case "-":
      case "*":
      case "/":
        lastLetter = oldinput.slice(-1);
        if (lastLetter === '+' || lastLetter === '-' || lastLetter === '*' || lastLetter === '/') 
          this.setState({
            result: oldinput.slice(0, -1) + button
          });
        else 
          this.setState({
            result: oldinput + button
          });
        break;
      case '=':
        try {
          this.setState({
            result: eval(this.state.result) + ''
          });
        } catch (e) {
          this.setState({result: 'NaN'});
        }
        break;
      case '.':
        lastLetter = oldinput.slice(-1);
        if (lastLetter !== '.') {
          this.setState({
            result: oldinput + button
          });
        }
        break;
    }
  }
 
  render() {
    const {result} = this.state;
 
    return (
      <LinearGradient colors={['#3498db','#5F9EA0', '#20B2AA', '#556B2F', '#8e44ad', '#1E90FF']} style={styles.container}>
 
        <CalculatorResponse
          result={result}
          refresh={this
          .refresh
          .bind(this)}/>
 
        <CalculatorButtonsContainer
          handleButtonPress={this
          .handleButtonPress
          .bind(this)}/>
 
        <StatusBar barStyle="light-content"/>
      </LinearGradient>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});