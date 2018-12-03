import React from 'react'
import {Text,View,StyleSheet,ActivityIndicator,TextInput,KeyboardAvoidingView,TouchableOpacity,AsyncStorage} from 'react-native'
import { createStackNavigator } from 'react-navigation'
import Home from './Home'
import {StyleProvider} from 'native-base'
import getTheme from '../native-base-theme/components'

export default class Login extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            isLoading:false,
            email_error:"L'adresse email n'est pas valide",
            email_error_display:false,
        };
    }

    ComponentDidMount(){
        this._loadInitialState.done()
    }

    _loadInitialState = async() =>{
        var value = await AsyncStorage.getItem('tokens');
        if(value !==null){
            this.props.navigation.navigate('Home');
        }
    }
    render () {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
                <View style={styles.container}>
                    <Text style={styles.header}>-- LOGIN --</Text>
                    {this.state.email_error_display && <Text style={styles.invalid_email}>{this.state.email_error}</Text>}
                    <TextInput
                        placeholder='Email'
                        underlineColorAndroid = 'transparent'
                        style = {styles.textInput}
                        onChangeText={(email) => this.setState({email})}
                    />
                    <TextInput
                        placeholder='Password'
                        underlineColorAndroid = 'transparent'
                        style = {styles.textInput}
                        secureTextEntry={true}
                        onChangeText={(password) => this.setState({password})}
                    />
                    <TouchableOpacity style={styles.btn}
                                      onPress = {this.login}>
                        <Text>Log in</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.loading}>
                    {this.state.isLoading ? (
                        <ActivityIndicator
                            animating
                            color="#fff"
                            size="large"
                        />
                    ) : null}
                </View>
            </KeyboardAvoidingView>

        );


    }

    login = () => {
        //alert(this.state.email);
        /*on valide le champs de l'adresse email*/
        let reg_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        if(reg_email.test(this.state.email)){
            this.setState({email_error_display:false})
            this.setState({isLoading: true})
            fetch('http://apitootree.wadesit.tech/v1/clients/web/admin/login',{
                method:'POST',
                headers:{
                    'Accept':'application/json,text/plain',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    email: this.state.email,
                    password: this.state.password
                })
            })
                .then((response) => response.json())
                .then((res) => {
                    console.log(res)
                    this.setState({isLoading: false})
                    if(!res.hasOwnProperty('errors')){
                        AsyncStorage.setItem('tokens',res.access_token);
                        console.log('jarrive kuste avant le navigate')
                        alert('la connexion passe');
                        this.props.navigation.navigate('Home');
                    }else{
                        alert('parametres de connexion incorrecte');
                    }
                })
                .catch((error) =>{
                    this.setState({isLoading: false})
                    console.log("voici le message d'erreur apres la requete",error)
                })

        }else{
            this.setState({email_error_display:true})
        }

    };

    testget = () =>{
        fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson)=>{
                console.log(responseJson)
            })
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
    header : {
        fontSize:24,
        marginBottom:60,
        color:'#fff',
        fontWeight:'bold',
        textAlign:'center',
    },
    textInput:{
        alignSelf:'stretch',
        padding:16,
        marginBottom:20,
        backgroundColor:'#fff'
    },
    btn:{
        alignContent:'stretch',
        backgroundColor:'#01c853',
        padding:20,
        alignItems:'center',
        borderRadius:50
    },
    loading:{
        position:'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',

    },
    invalid_email:{
        color:'red'
    }
});