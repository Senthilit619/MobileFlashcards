import React, { Component } from 'react'
import { View, Text, StyleSheet ,TextInput,TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'
import {white,purple} from '../utils/colors'
 class NewDeck extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <View>          
          <Text style={[styles.label]}>What is the title of the Deck ?</Text>
          <TextInput style={styles.textInput}/>
          </View>          
          <TouchableOpacity style={styles.AndroidSubmitBtn}>
            <Text style={{color:white}}>Submit </Text>
          </TouchableOpacity>        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    padding: 15,
    justifyContent:'center',
    alignItems:'center'
  },
  textInput:{
    alignSelf:'stretch',
    paddingLeft:5,
    paddingRight:5
  },
   AndroidSubmitBtn: {
    backgroundColor: purple,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 3,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:30
  },
  label:{
    marginTop:20,
    marginBottom:20,
    fontSize:20
  }
})

export default NewDeck