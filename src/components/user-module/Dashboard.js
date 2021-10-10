
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
import {NavigationActions, StackActions} from 'react-navigation';
let deviceWidth = (Dimensions.get('window').width);
let deviceHeight = (Dimensions.get('window').height);


class Dashboard extends Component{
    render(){
return(
  <View style={{height:deviceHeight, width:deviceWidth,backgroundColor:'#FFF5F3'}}>
    
                  <Image style={{height:deviceHeight/3+40,width:deviceWidth-80, resizeMode:'stretch',alignSelf:'center'}} source={require("../images/dashboard.png")} />
      
      <View style={styles.style_card}>
          <Text style={{fontSize:20,alignSelf:'center',color:'#911E1E'}}>Create an account</Text>
  

      <TouchableOpacity onPress={()=>this.onPressRegister()}>
      <Text style={{fontSize:20,alignSelf:'center',color:'#0E0A74',padding:5,fontWeight:'600'}}>Register</Text>
          </TouchableOpacity>

<View style={{width:deviceWidth/2,height:2,alignSelf:'center',backgroundColor:'#911E1E',marginTop:30}}></View>
<Text style={{fontSize:20,alignSelf:'center',color:'#911E1E',marginTop:30}}>Already have an account?</Text>
          <TouchableOpacity style={{}} onPress={()=> this.onPressLogin()}>
            <Text style={{fontSize:20,alignSelf:'center',color:'#0E0A74',padding:5,fontWeight:'600'}}>Login</Text>
      </TouchableOpacity>
      </View>
      
      <TouchableOpacity style={{}} onPress={()=> this.onPressHome()}>
            <Text style={{fontSize:5,alignSelf:'center',color:'#0E0A74',padding:5}}>Home</Text>
      </TouchableOpacity>
 
  </View>
 )
    }

    onPressLogin(){
        this.props.navigation.dispatch(StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Login' })]
          }))
    }

    onPressRegister(){
        this.props.navigation.dispatch(StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Registration' })]
          }))
    }

    onPressHome(){
        this.props.navigation.dispatch(StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Home' })]
          }))
    }

}


const styles = StyleSheet.create({
    backgroundStyle:{
        backgroundColor: '#FFF5F3',
       height:deviceHeight
      },
      style_card:{
        width:deviceWidth-50,
        backgroundColor:'white',
        height:deviceHeight/3,
        alignSelf:'center',
        borderRadius:15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: .1,
        shadowRadius: 8,
        elevation: 3,
        alignItems:'center',
        justifyContent:'center'
      },
    });

export default Dashboard;