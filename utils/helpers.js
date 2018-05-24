import React from 'react'
import { View, StyleSheet, AsyncStorage } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { red, orange, blue, lightPurp, pink, white } from './colors'
import { Notifications, Permissions } from 'expo'

const myAppKey = 'flashCards'

export function getDecks(){
	AsyncStorage.getItem(myAppKey).then((data)=>{
		return data;
	})
}
export function getDecks () { return AsyncStorage.getItem('deck',(result)=>{}) }

export function getDeck (id) { return AsyncStorage.getItem('deck') .then((results) => { const data = JSON.parse(results) const deck = data[id] return deck }) }

export function saveDeckTitle(title){ return AsyncStorage.mergeItem('deck', JSON.stringify({

    [title]: {name:title,questions:[]}
}))
}

export function addCardToDeck(title, card){ return AsyncStorage.getItem('deck') .then((results) => { const data = JSON.parse(results) const deck = data[title] deck.questions.push(card) AsyncStorage.setItem('deck', JSON.stringify(data)) }) }

export function clearAll(){ return AsyncStorage.clear() }
