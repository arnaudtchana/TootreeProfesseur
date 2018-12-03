import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from "./Components/Login";
import Home from "./Components/Home"
import Expo from 'expo'
import {StyleProvider} from 'native-base'
import getTheme from './native-base-theme/components'
import {createStackNavigator, createAppContainer, createSwitchNavigator, createDrawerNavigator} from 'react-navigation'
import Search from "./Components/Search";
import About from "./Components/About";


const Application = createSwitchNavigator({

        Login: {screen: Login},
        Home: {screen: Home},
    },
    {
        navigationOptions:()=>({
            header:null,
        })


    });

const AppContainer = createAppContainer(Application);

const MenuNavigator = createDrawerNavigator({

    Search: {
        screen: Search
    },
    About: {
        screen: About
    },
});

const MenuContainer = createAppContainer(MenuNavigator);
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loading: true };
    }
    async componentWillMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });
        this.setState({ loading: false });
    }

    render() {
        if (this.state.loading) {
            return <Expo.AppLoading />;
        }
        return (
            <StyleProvider style={getTheme('material')}>
                <MenuContainer />
            </StyleProvider>

        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
