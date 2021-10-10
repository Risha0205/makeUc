import React, { Component } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native';
import Carousel from 'simple-carousel-react-native';
import {NavigationActions, StackActions} from 'react-navigation';
let deviceWidth = (Dimensions.get('window').width);
let deviceHeight = (Dimensions.get('window').height);

class Walkthrough extends Component{
    render(){
        return(
            <View style={{backgroundColor:'#FFF5F3',height:deviceHeight,width:deviceWidth}}>
   <Carousel  
            showScroll={ true }
            color='#0F0A98'
            height={deviceHeight-200}
            width={deviceWidth}
            backgroundColor='#FFF5F3'>
            <View style={{backgroundColor:'transparent',height:deviceHeight-200,width:deviceWidth}}>
            <Image style={{height:deviceHeight/3+40,width:deviceWidth-80,marginTop:40, resizeMode:'stretch',alignSelf:'center'}} source={require("../images/walkt2.png")} />
                <Text style={{textAlign:'center', marginTop:40,fontSize:25,color:'#911E1E',fontWeight:'500'}}>Welcome To Couple Journal!</Text>
                <Text style={{textAlign:'center', marginTop:10,fontSize:18,color:'#911E1E',fontWeight:'400',padding:10}}>A place to have compassionate communication with your partner for a healthy relationship.</Text>
            </View>
            
            <View style={{backgroundColor:'transparent',height:deviceHeight-200,width:deviceWidth}}>
            <Image style={{height:deviceHeight/3+40,width:deviceWidth-80,marginTop:40, resizeMode:'stretch',alignSelf:'center'}} source={require("../images/walkt1.png")} />
                <Text style={{textAlign:'center', marginTop:20,fontSize:20,color:'#911E1E',fontWeight:'400',padding:20}}>Share your thoughts, understand your partner better.</Text>
                    <TouchableOpacity style={styles.style_button} onPress={()=>this.onPressButton()}>
                        <Text style={{color:'white',fontSize:18,fontWeight:'600'}}>Get Started</Text>
                    </TouchableOpacity>
            </View>
          </Carousel>
            </View>
         
        )
    }
    onPressButton(){
        this.props.navigation.dispatch(StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Dashboard' })]
          }))
    }

}

const styles = StyleSheet.create({
    style_button:{
        padding:20,
        paddingLeft:30,
        paddingRight:30,
        backgroundColor:'#0F0A98',
        alignSelf:'center',
        borderRadius:12,
        marginTop:40
      }
    });


export default Walkthrough;