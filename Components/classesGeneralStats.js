import  React from 'react'
import {View,StyleSheet,TextInput,Text} from 'react-native'
import {Icon, Button, Container, Header, Content, Left} from 'native-base'
import {StyleProvider} from 'native-base'
import getTheme from '../native-base-theme/components'
export default class ClassesGeneralStats extends React.Component{

    constructor (props) {
        super (props)
    }

    render (){
        return(
            <View style={{flex: 1, flexDirection: 'row',justifyContent: 'space-between',
                alignItems: 'stretch',borderTopColor:'#707070',paddingTop:5,paddingBottom:5,
                borderTopWidth:1}}>
                <View style={styles.classes}><Text style={styles.text}>Classe: </Text></View>
                <View style={styles.classesname}><Text style={styles.textClassName}>{this.props.className}</Text></View>
                <View style={styles.subjectCss}><Text ellipsizeMode='tail' style={styles.textSubject}> {this.props.subject}</Text></View>
                <View style={styles.pourcentageCss}>
                    <Text style={[styles.text,styles.couleurVerte]}>&#9679; {this.props.understandingPercentage}</Text>
                </View>
                <View style={styles.pourcentageCss}>
                    <Text style={[styles.text,styles.couleurOrange]}>&#9679; {this.props.unUnderstandingPercentage}</Text>
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
    textSubject:{
        fontSize:10,
        fontFamily:'Roboto',
        color:'#AAAAAA'
    },
    viewText:{
        textAlign:'center',
    },
    pourcentageCss:{
        textAlign:'center',
        width:'12%'
    },
    subjectCss:{
        textAlign:'center',
        width:'36%',
        fontFamily:'Roboto',
    },
    classesname: {
        width:'25%',
    },
    classes:{
        width:'15%'
    },
    ligne:{
        borderTopColor:'#707070',
        borderTopWidth:1
    },
    couleurVerte:{
        color:'#71C285'
    },
    couleurOrange:{
        color:'#F0785A'
    }

})