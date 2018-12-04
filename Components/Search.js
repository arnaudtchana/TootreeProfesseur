import  React,{Component} from 'react'
import Svg,{Circle, Ellipse,} from 'react-native-svg';
import {View,StyleSheet,TextInput,Dimensions,Platform,StatusBar,Image} from 'react-native'
import {Icon, Button, Container, Header, Content, Left,Right,Title,Body,Input,Item,Card,CardItem,Text} from 'native-base'
import getTheme from '../native-base-theme/components';
import platform from '../native-base-theme/variables/platform';
import {StyleProvider} from 'native-base'
import ClassesGeneralStats from "./classesGeneralStats";
import Swiper from 'react-native-swiper'
import DevoirsQcm from './DevoirsQcm'
export default class Search extends React.Component{

    constructor (props) {
        super (props)
        this.state = {
            nombre_amis:3,
            nombre_classe:3,
            url:'../assets/img/resto.jpg'
        }
        const dimensions = Dimensions.get('window');
    }

    render (){
        return(
            <StyleProvider style={getTheme()}>
            <Container style={styles.androidHeader}>
                <Header style={styles.headerCustom}>

                    <Button transparent onPress={() => this.props.navigation.openDrawer()}>
                        <Icon style={{color:'white'}} name="ios-menu"/>
                    </Button>

                    <Body style={{flex:1,marginLeft:0,marginRight:0}}>
                    <Item rounded style={{flexDirection: 'row'}}>
                        <Icon style={styles.iconSearch} active name='ios-search'/>
                        <Input placeholderTextColor="#FFFFFF" style={styles.input} placeholder='Chercher une personne'/>
                    </Item>
                    </Body>


                        <Button transparent>
                            <Icon name="ios-people" style={styles.icon_top_margin_people}
                                  onPress={() => this.props.navigation.openDrawer()} />
                            <View style={styles.span_ami}>
                                <Text style={{paddingLeft:0,color:'white'}}>{this.state.nombre_amis}</Text>
                            </View>

                        </Button>

                </Header>
                <Content style={{backgroundColor:'#F5F5F5'}}>

                    <Card style={styles.cardStyle}>
                        <CardItem header style={styles.cardItemHeader}>
                            <View style={{borderBottomColor:'#707070',borderBottomWidth:0.99,flexDirection:'row',flex:1,paddingBottom:10}}>
                            <Image
                                source={require('../assets/img/pie_stats.png')}
                            />
                            <View style={styles.span_nbre_classe}>
                                <Text style={{paddingLeft:0,color:'white'}}>{this.state.nombre_classe}</Text>
                            </View>

                            <View style={styles.CardTitle}>
                                <Text style={styles.headerCardStyle}>&nbsp; Statisques générales de la classe</Text>
                            </View>
                            </View>
                        </CardItem>
                        <CardItem>
                            <Body>
                            <ClassesGeneralStats
                                className='Terminale C'
                                subject='Mathématiques'
                                understandingPercentage='40%'
                                unUnderstandingPercentage='30%'
                            />
                            <ClassesGeneralStats
                                className='Terminale A4'
                                subject='Mathématiques'
                                understandingPercentage='25%'
                                unUnderstandingPercentage='75%'
                            />
                            <ClassesGeneralStats
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
                    <Card style={styles.cardStyle}>
                        <CardItem header style={styles.cardItemHeader}>
                            <View style={styles.entente_card_tootime}>
                            <Image
                                source={require('../assets/img/time.png')}
                            />
                            <View style={styles.span_nbre_classe}>
                                <Text style={{paddingLeft:0,color:'white'}}>{this.state.nombre_classe}</Text>
                            </View>

                            <View style={styles.CardTitle}>
                                <Text style={styles.headerCardStyle}>&nbsp; Tootime</Text>
                            </View>
                            </View>
                        </CardItem>
                        <CardItem>
                            <Body>

                            <Swiper autoplay={true} showsButtons={false} style={{height:200}} activeDotColor='white'>
                                <View>
                                    <Image source={require('../assets/img/resto.jpg')}/>
                                    <View style={styles.positionTextSwipe}>
                                        <View>
                                            <Text style={styles.date_swipe}>01/04/2018</Text>
                                            <Text style={styles.text_swipe}>Réunion des parents d'élèves</Text>
                                        </View>
                                        <Right>
                                        <Button style={styles.boutonStat}><Text>VOIR +</Text></Button>
                                        </Right>
                                    </View>
                                </View>
                                <View>
                                    <Image source={require('../assets/img/resto.jpg')}/>
                                    <View style={styles.positionTextSwipe}>
                                        <View>
                                            <Text style={styles.date_swipe}>01/04/2018</Text>
                                            <Text style={styles.text_swipe}>Réunion des parents d'élèves</Text>
                                        </View>
                                        <Right>
                                            <Button style={styles.boutonStat}><Text>VOIR +</Text></Button>
                                        </Right>
                                    </View>
                                </View>
                                <View>
                                    <Image source={require('../assets/img/resto.jpg')}/>
                                    <View style={styles.positionTextSwipe}>
                                        <View>
                                            <Text style={styles.date_swipe}>01/04/2018</Text>
                                            <Text style={styles.text_swipe}>Réunion des parents d'élèves</Text>
                                        </View>
                                        <Right>
                                            <Button style={styles.boutonStat}><Text>VOIR +</Text></Button>
                                        </Right>
                                    </View>
                                </View>
                            </Swiper>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card style={styles.cardStyle}>
                        <CardItem header style={styles.cardItemHeader}>
                            <View style={styles.entente_card}>
                            <Image
                                source={require('../assets/img/message_text_outline.png')}
                            />
                            <View style={styles.span_nbre_classe}>
                                <Text style={{paddingLeft:0,color:'white'}}>{this.state.nombre_classe}</Text>
                            </View>

                            <View style={styles.CardTitle}>
                                <Text style={styles.headerCardStyle}>&nbsp; Messages</Text>
                            </View>
                            </View>
                        </CardItem>
                        <CardItem>
                            <Body>

                            <View style={styles.conteneur_message}>
                                <View>
                                <Image
                                source={require('../assets/img/profile1.png')}
                                />
                                </View>
                                <View>
                                    <Text style={styles.nom_expediteur}>Duronne</Text>
                                </View>
                                <View style={styles.viewMessageTextContainer}>
                                    <Text numberOfLines={1} ellipsizeMode='tail' style={styles.texte_expediteur}>Bonjour Durone comment tu vas? super
                                    je teste le mode de fonctionnement de ellipsize et sa veut deranger un peu je sais pas pkoi
                                    </Text>
                                </View>
                            </View>

                            <View style={styles.conteneur_message}>
                                <View>
                                    <Image
                                        source={require('../assets/img/profile2.png')}
                                    />
                                </View>
                                <View>
                                    <Text style={styles.nom_expediteur}>Pavel</Text>
                                </View>
                                <View style={styles.viewMessageTextContainer}>
                                    <Text numberOfLines={1} ellipsizeMode='tail' style={styles.texte_expediteur}>Bonjour Pavel comment tu vas? super
                                        je teste le mode de fonctionnement de ellipsize et sa veut deranger un peu je sais pas pkoi
                                    </Text>
                                </View>
                            </View>

                            <View style={styles.conteneur_message}>
                                <View>
                                    <Image
                                        source={require('../assets/img/profile3.png')}
                                    />
                                </View>
                                <View>
                                    <Text style={styles.nom_expediteur}>Yves</Text>
                                </View>
                                <View style={styles.viewMessageTextContainer}>
                                    <Text numberOfLines={1} ellipsizeMode='tail' style={styles.texte_expediteur}>Bonjour Yves comment tu vas? super
                                        je teste le mode de fonctionnement de ellipsize et sa veut deranger un peu je sais pas pkoi
                                    </Text>
                                </View>
                            </View>
                            </Body>
                        </CardItem>
                        <CardItem footer style={{flex:1}}>
                            <Right style={{flex:1}}><Button style={styles.boutonStat}><Text>VOIR +</Text></Button></Right>
                        </CardItem>
                    </Card>
                    <Card style={styles.cardStyle}>
                        <CardItem header style={styles.cardItemHeader}>
                            <View style={styles.entente_card}>
                            <Image
                                source={require('../assets/img/icon_text.png')}
                            />
                            <View style={styles.span_nbre_classe}>
                                <Text style={{paddingLeft:0,color:'white'}}>{this.state.nombre_classe}</Text>
                            </View>

                            <View style={styles.CardTitle}>
                                <Text style={styles.headerCardStyle}>&nbsp; Devoirs et QCM</Text>
                            </View>
                            </View>
                        </CardItem>
                        <CardItem>
                            <Body>
                            <DevoirsQcm
                                className='Terminal D'
                                textTitreQcm='Cinématique du point matériel'
                                titreMoyenne='Moyenne de la classe'
                                moyenneClasse='65/100'
                            >
                            </DevoirsQcm>
                            <DevoirsQcm
                                className='Terminal A4'
                                textTitreQcm='Fonctions'
                                titreMoyenne='Moyenne de la classe'
                                moyenneClasse='50/100'
                            />
                            <DevoirsQcm
                                className='Première C'
                                textTitreQcm='Fonctions exponentielle et puissances'
                                titreMoyenne='Moyenne de la classe'
                                moyenneClasse='80/100'
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
        color:'white'
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
        top:13,
        left:35,
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        textAlign:'center'
    },
icon_top_margin_people:{
    //marginTop:10,
    paddingRight:2,
    fontSize:30,
    color:'white'
},
    icon_top_margin_menu:{
        //marginTop:5,
        fontSize:30,
        color:'white'
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
    },
    cardStyle:{
        borderRadius:20,
        marginLeft:10,
        marginRight:10,
        overflow:'hidden',
    },
    boutonStat:{
        backgroundColor:'#BE3AFF',
        borderRadius:30
    },
    span_nbre_classe:{
        backgroundColor:'#FF5722',
        color:'#FFFF',
        position:'absolute',
        borderRadius:20,
        width:20,
        height:20,
        top:-2,
        left:10,
        justifyContent:'center',
        alignItems:'center',
        flex:1
    },
    text:{
     fontFamily:'Roboto',
     fontSize:16
},
    text_swipe:{
        color:'white',
        fontFamily:'Roboto',
        fontSize:16,
        fontWeight:'900'
    },
    date_swipe:{
        color:'#FF5722',
        fontFamily:'Roboto',
        fontSize:16,
        fontWeight:'500'
    },
    positionTextSwipe:{
        position:'absolute',
        top:150,
        flex:1,
        flexDirection: 'row'
    },
    courbe_haut:{
        height:50,
        backgroundColor:'#BE3AFF',

    },
entente_card:{
    borderBottomColor:'#707070',
    borderBottomWidth:0.99,
    flexDirection:'row',
    flex:1,
    paddingBottom:10
            },
    entente_card_tootime:{
        flexDirection:'row',
        flex:1,
        paddingBottom:10
    },
    cardItemHeader:{
        paddingBottom:0
    },
    nom_expediteur:{
        fontFamily:'Roboto',
        color:'#000000',
        fontWeight:'bold'
    },
    texte_expediteur:{
        fontFamily:'Roboto',
        width:200,
        fontSize:12,
        textAlign:'center'
    },
    conteneur_message:{
        flexDirection:'row',
        flex:1,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor:'#707070',
        borderBottomWidth:0.80,
        paddingBottom:10,
        paddingTop:10
    },
    viewMessageTextContainer:{
        paddingLeft:3,
        flex:1,
    },
    CardTitle:{
        marginLeft:10
    }


})