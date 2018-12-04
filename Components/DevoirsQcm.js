import  React from 'react'
import {View,StyleSheet,TextInput,Text} from 'react-native'
import {Icon, Button, Container, Header, Content, Left} from 'native-base'
import {StyleProvider} from 'native-base'
import getTheme from '../native-base-theme/components'
export default class DevoirsQcm extends React.Component{

    constructor (props) {
        super (props)
    }

    render (){
        return(
            <View style={{flex: 1, flexDirection: 'row',justifyContent: 'space-between',
                alignItems: 'stretch',borderBottomColor:'#707070',marginTop:5,marginBottom:5,
                borderBottomWidth:0.80}}>
                <View style={styles.classesname}><Text style={styles.textClassName}>{this.props.className}</Text></View>
                <View style={styles.titreQcm}><Text numberOfLines={1} ellipsizeMode='tail' style={[styles.textTitreQcm,styles.text]}>{this.props.textTitreQcm} </Text></View>
                <View style={styles.titreMoyenne}><Text numberOfLines={1} ellipsizeMode='tail' style={styles.textTitreMoyenne}> {this.props.titreMoyenne}</Text></View>
                <View style={styles.pourcentageCss}>
                    <Text style={[styles.text,styles.couleurVerte]}>&#9679; {this.props.moyenneClasse}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text:{
        fontSize:10,
        fontFamily:'Roboto',
        color:'#707070'
    },
    textClassName:{
        fontWeight:'bold',
        fontSize:10,
    },
    textTitreMoyenne:{
        fontSize:10,
        fontFamily:'Roboto',
        color:'#AAAAAA',
        width:80,
    },
    viewText:{
        textAlign:'center',
    },
    pourcentageCss:{
        textAlign:'center',
    },
    titreMoyenne:{
        textAlign:'center',
        width:'36%',
        fontFamily:'Roboto',
        flex:1
    },
    classesname: {
        width:'25%',
    },
    titreQcm:{
        width:'15%',
        flex:1
    },
    ligne:{
        borderTopColor:'#707070',
        borderBottomWidth:0.1
    },
    couleurVerte:{
        color:'#71C285'
    },
    couleurOrange:{
        color:'#F0785A'
    },
    textTitreQcm:{
        width:60
    }

})