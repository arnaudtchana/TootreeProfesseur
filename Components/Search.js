import  React,{Component} from 'react'
import Svg,{Circle, Ellipse,} from 'react-native-svg';
import {View,StyleSheet,TextInput,Dimensions,Platform,StatusBar} from 'react-native'
import {Icon, Button, Container, Header, Content, Left,Right,Title,Body,Input,Item,Card,CardItem,Text} from 'native-base'
import getTheme from '../native-base-theme/components';
import platform from '../native-base-theme/variables/platform';
import {StyleProvider} from 'native-base'
import ClaClassesGeneralStats from './classesGeneralStats'
import ClassesGeneralStats from "./classesGeneralStats";
export default class Search extends React.Component{

    constructor (props) {
        super (props)
        this.state = {
            nombre_amis:3
        }
        const {height, width} = Dimensions.get('window');
    }

    render (){
        return(
            <StyleProvider style={getTheme()}>
            <Container style={styles.androidHeader}>
                <Header span style={styles.headerCustom}>
                    <Left style={styles.icon_top_margin_menu}>
                    <Button transparent onPress={() => this.props.navigation.openDrawer()}>
                        <Icon name="ios-menu"/>
                    </Button>
                    </Left>

                    <Right>
                        <Item rounded style={{backgroundColor:'#FFFFFF',opacity:0.34}}>
                            <Icon style={styles.iconSearch} active name='search'/>
                            <Input placeholderTextColor='white' style={styles.input} placeholder='Rechercher une personne'/>
                        </Item>
                        <Button transparent>
                            <Icon name="people" style={styles.icon_top_margin_people}
                                  onPress={() => this.props.navigation.openDrawer()} />
                            <View style={styles.span_ami}>
                                <Text>{this.state.nombre_amis}</Text>
                            </View>

                        </Button>
                    </Right>
                </Header>
                <Content>
                    <Card style={styles.cardStyle}>
                        <CardItem header>
                            <Text style={styles.headerCardStyle}>Statisques générales de la classe</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                            <ClaClassesGeneralStats
                                className='Terminale C'
                                subject='Mathématiques'
                                understandingPercentage='40%'
                                unUnderstandingPercentage='30%'
                            />
                            <ClaClassesGeneralStats
                                className='Terminale A4'
                                subject='Mathématiques'
                                understandingPercentage='25%'
                                unUnderstandingPercentage='75%'
                            />
                            <ClaClassesGeneralStats
                                className='Première D'
                                subject='Mathématiques'
                                understandingPercentage='80%'
                                unUnderstandingPercentage='20%'
                            />
                            </Body>
                        </CardItem>
                        <CardItem footer style={{flex:1}}>
                            <Right style={{flex:1}}><Button style={styles.boutonStat}><Text>VOIR +</Text></Button></Right>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
            </StyleProvider>

        )
    }
}

const styles = StyleSheet.create({
    iconSpec:{
        color:'white',
        fontSize:25
    },
    title:{
        fontSize: 12
    },
    input:{
        height:30,
        justifyContent:'center',
        fontWeight:'bold',
        fontSize:12,
    },
    iconSearch:{
        color:'white',
    },
    headerCustom:{
        backgroundColor:'#BE3AFF',
    },
    span_ami:{
        backgroundColor:'#FF5722',
        color:'#FFFF',
        position:'absolute',
        borderRadius:20,
        width:20,
        height:20,
        fontSize:15,
        top:10,
        left:20,
        textAlign:'center',
        textAlignVertical:'center'
    },
icon_top_margin_people:{
    marginTop:10,
    fontSize:30,
},
    icon_top_margin_menu:{
        marginTop:5,
        fontSize:30,
    },
    androidHeader:{
        ...Platform.select({
            android:{
                paddingTop: StatusBar.currentHeight,
            }
        })
    },
    headerCardStyle:{
        fontFamily:'Roboto_medium',
        fontSize:14,
        color:'#707070',
        textDecorationLine: 'underline'
    },
    cardStyle:{
        borderRadius:10,
        marginLeft:10,
        marginRight:10
    },
    boutonStat:{
        backgroundColor:'#BE3AFF',
        borderRadius:30
    }


})