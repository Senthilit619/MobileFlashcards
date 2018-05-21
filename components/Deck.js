import React, { Component } from 'react'
import { View, Text, StyleSheet,TouchableNativeFeedback,AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import {white} from '../utils/colors'
export default class Deck extends Component {
  
  output(){
    console.log(this.props);    
  }
  render() {
    return (
      <TouchableNativeFeedback
        onPress={this.output}
        background={TouchableNativeFeedback.SelectableBackground()}>
      <View style={styles.container} onPress={()=> this.output()}>
        <Text style={styles.titleText}> Deck {this.props.id} </Text>
        <Text style={{fontSize:12}}>{} No of Cards </Text>
      </View>
    </TouchableNativeFeedback>
      
    )
  }
}

const styles = StyleSheet.create({
  
})
