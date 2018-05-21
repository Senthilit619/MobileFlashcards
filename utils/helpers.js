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