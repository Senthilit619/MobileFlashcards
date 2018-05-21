import React, { Component } from 'react'
import { View, Text, StyleSheet,FlatList ,TextInput,TouchableOpacity,TouchableNativeFeedback} from 'react-native'
import {white,purple} from '../utils/colors'
import Deck from './Deck'
import { createStackNavigator } from 'react-navigation';
 class DeckList extends Component {
  //const  = this.props;
  state = {
    decks:''
  }
  componentWillMount(){    
    this.setState({decks:this.props.screenProps});   
  }
  output(){
    console.log(this.props);
  }
  render() {   
    const {navigation} = this.props;
    console.log(this.state); 
    return (
      <View style={styles.container}>
        <FlatList
          data={Object.values(this.state.decks)}
          renderItem={({item}) => (
             <TouchableNativeFeedback
              onPress={()=> {this.output();navigation.navigate('DeckDetails',{item})}}
              background={TouchableNativeFeedback.SelectableBackground()}
              key={item.title}
              >
                <View style={styles.deck}>
                  <Text style={styles.titleText}> {item.title} </Text>
                  <Text style={{fontSize:12}}>{item.questions.length} No of Cards </Text>
                </View>
              </TouchableNativeFeedback>
          )}
          style={styles.flatlist} 
          onPress={()=> this.output()}        
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    padding: 15,  
    alignItems:'stretch' 
  },
  flatlist:{
    marginTop:15,
    marginBottom:15
  },
  deck: {
    flex: 1,
    backgroundColor: white,
    padding: 15,
    borderRadius:5,    
    alignItems:'center',
    marginTop:10
  },
  titleText:{
    fontSize:18,
    color:'orange'
  }
})

export default DeckList