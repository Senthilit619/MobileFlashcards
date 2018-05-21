import React, { Component } from 'react'
import { View, Text, StyleSheet ,TextInput,TouchableOpacity,AsyncStorage} from 'react-native'
import {white,purple} from '../utils/colors'
 class AddCard extends Component {
  
  state = {
    question:'',
    answer:''
  }
  submitCard(){
    console.log(this.state);
    AsyncStorage.setItem("asd", this.state.question,function(){
      console.log("added");
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <View>
          <View>
            <Text style={[styles.label]}>Question</Text>
            <TextInput style={styles.textInput} onChangeText={TextInput => this.setState((state)=>{
              state.question = TextInput;
              return state;
            })}/>
          </View>
          <View>
            <Text style={[styles.label]}>Answer</Text>
            <TextInput style={styles.textInput} onChangeText={TextInput => this.setState((state)=>{
              state.answer = TextInput;
              return state;
            })}/>
          </View>          
          <TouchableOpacity style={styles.AndroidSubmitBtn} onPress={()=>this.submitCard()}>
            <Text style={{color:white}}>Submit </Text>
          </TouchableOpacity>
        </View>
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
    width:200,
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
    marginTop:10,
    marginBottom:10,
    fontSize:14
  }
})

export default AddCard