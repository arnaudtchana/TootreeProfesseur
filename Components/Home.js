import React from 'react'
import {Text,View,StyleSheet,ActivityIndicator,TextInput,KeyboardAvoidingView,TouchableOpacity,AsyncStorage} from 'react-native'
import { createStackNavigator,createAppContainer,createSwitchNavigator,createDrawerNavigator } from 'react-navigation'
import Login from "./Login";
import Search from './Search'
import About from './About'

const MenuNavigator = createDrawerNavigator({

    Search: {
        screen: Search
    },
    About: {
        screen: About
    },
});

const MenuContainer = createAppContainer(MenuNavigator);

export default class Home extends React.Component{

    render () {
        return (
            <MenuContainer/>
        );


    }



}

const styles = StyleSheet.create({
    wrapper : {
        flex:1,
    },
    container : {
        flex:1,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#2896d3',
        paddingLeft : 40,
        paddingRight : 40
    },
    text:{
        color: '#fff'
    }

});