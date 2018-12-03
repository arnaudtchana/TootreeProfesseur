import  React from 'react'
import {View,StyleSheet,TextInput,Text} from 'react-native'
import {Icon, Button, Container, Header, Content, Left} from 'native-base'


export default class Signup extends React.Component{

    constructor (props) {
        super (props)
    }

    render (){
        return(

                <Container>
                    <Header style={{color: 'white',backgroundColor:'red'}}>
                        <Left style={{marginLeft: 0,paddingLeft: 0,paddingTop:20}}>
                            <Icon name="ios-menu" style={style.iconSpec}
                                  onPress={() => this.props.navigation.openDrawer()} />
                        </Left>
                    </Header>
                    <Content>
                        <Text>
                            Bienvenu sur la page de recherchefdgd
                        </Text>
                    </Content>
                </Container>

        )
    }
}

const style = StyleSheet.create({
    iconSpec:{
        color:'white',
        fontSize:25
    },
    title:{
        fontSize: 22,
        marginBottom:20
    }
})