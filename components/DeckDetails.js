import React, { Component } from 'react'
import { View, Text, StyleSheet ,TextInput,TouchableOpacity,AsyncStorage} from 'react-native'
import {white,purple} from '../utils/colors';
import { createStackNavigator } from 'react-navigation';
 class DeckDetails extends Component {
 state = {
  deck:''
 }
 componentWillMount(){
  console.log(this.props.navigation.state.params.item);
  this.setState({deck:this.props.navigation.state.params.item});  
  console.log(this.state );
  console.log("asd")
 }
  render() {
    return (
      <View style={styles.container}>
        <View>          
          <Text style={[styles.label]}>{this.props.navigation.state.params.item.title}</Text>
          <Text style={{fontSize:12}}>{this.props.navigation.state.params.item.questions.length} Cards Available</Text>
          </View>          
          <TouchableOpacity style={styles.AndroidSubmitBtn} onPress={()=>this.props.navigation.navigate('AddCard')}>
            <Text style={{color:white}} >Add Card </Text>
          </TouchableOpacity>    
          <TouchableOpacity style={styles.AndroidSubmitBtn} onPress={()=>this.props.navigation.navigate('Quiz')}>
            <Text style={{color:white}} >Start Quiz</Text>
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

export default DeckDetails