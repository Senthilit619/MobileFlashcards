import React from 'react';
import { StyleSheet, Platform,TextInput, Text, View, AsyncStorage } from 'react-native';
import AddCard from './components/AddCard';
import Deck from './components/Deck';
import DeckList from './components/DeckList';
import DeckDetails from './components/DeckDetails';
import NewDeck from './components/NewDeck';
import Quiz from './components/Quiz';
import { purple, white,blue,orange,lightPurp } from './utils/colors';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { Constants } from 'expo';
import { createBottomTabNavigator ,createStackNavigator} from 'react-navigation';
import { getDecks} from './utils/helpers';


const Tabs = createBottomTabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Deck List',
      tabBarIcon: ({ tintColor }) => <Ionicons name='md-list-box' size={30} color={tintColor} />
    },
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
    },
  }
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: white,
    style: {
      height: 56,
      backgroundColor: purple,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})


const MainNavigator = createStackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      headerTintColor: purple,
      headerStyle: {
        backgroundColor: '#ccc',
        height:0
      }
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      headerTintColor: purple,
      headerStyle: {
        backgroundColor: orange,
      },      
      headerTitle:'Add Card'
    }
  },
  DeckDetails: {
    screen: DeckDetails,
    navigationOptions:({ navigation })=>( {
      headerTintColor: purple,
      headerStyle: {
        backgroundColor: orange,
      },      
      headerTitle:navigation.state.params.item.title
    })
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      headerTintColor: purple,
      headerStyle: {
        backgroundColor: orange,
      },      
      headerTitle:'Quiz'
    }
  }
})

export default class App extends React.Component {
  state = {
    decks:{
      React: {
        title: 'React',
        questions: [
          {
            question: 'What is React?',
            answer: 'A library for managing user interfaces'
          },
          {
            question: 'Where do you make Ajax requests in React?',
            answer: 'The componentDidMount lifecycle event'
          }
        ]
      },
      JavaScript: {
        title: 'JavaScript',
        questions: [
          {
            question: 'What is a closure?',
            answer: 'The combination of a function and the lexical environment within which that function was declared.'
          }
        ]
      }
    }
  }  
  async componentWillMount(){
    console.log(this.state);
    await AsyncStorage.setItem("decks",JSON.stringify(this.state.decks),function(){
      console.log("set decks");
    });
  }
  async componentDidMount(){
    const decks = await AsyncStorage.getItem("decks",function(){
      console.log("getting decks");
    })
    console.log(decks);
  }
  render() {    
    return (
      <View style={styles.container}>                                
        <MainNavigator style={{flex:1}} screenProps={this.state.decks}/>       
      </View>
    );
  }
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: orange,    
  },
  tab:{
    flex:1,
    marginTop:30,
    padding:20,
    borderWidth:2,
    borderColor:'white'
  }
});
