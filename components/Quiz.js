import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import {white} from '../utils/colors'
export default class Quiz extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <Text> Quiz </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    padding: 15,
  },
})
