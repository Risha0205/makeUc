/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 let deviceWidth = (Dimensions.get('window').width);
 let deviceHeight = (Dimensions.get('window').height);
 import AppNavigation from './src/components/AppNavigation';
 
 class App extends Component{
   render(){
     let listdata = 
   [
     {day: 'Yesterday',
     date: '8 Oct 2021',
     emotions: 'Happy',
     sleep: 'Plenty'
   },
     {day: 'Yesterday',
     date: '8 Oct 2021',
     emotions: 'Happy',
     sleep: 'Plenty'
   },
     {day: 'Yesterday',
     date: '8 Oct 2021',
     emotions: 'Happy',
     sleep: 'Plenty'
   },
 
   ]
     return(
 <AppNavigation/>
     )
   }
 
 
 }
 
 
 
 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
   style_header:{
     backgroundColor:'#FFF5F3',
     height:40,
     width:deviceWidth
   },
   style_grid:{
     width:deviceWidth-20,
     backgroundColor:'white',
     height:deviceHeight/2,
     alignSelf:'center',
     borderRadius:15,
     shadowColor: '#000',
     shadowOffset: { width: 0, height: 2 },
     shadowOpacity: .1,
     shadowRadius: 8,
     elevation: 3,
   },
   style_button:{
     height:40,
     backgroundColor:'#8F8D8C',
     width:180,
     alignItems:'center',
     justifyContent:'center',
     alignSelf:'center',
     marginTop:50,
     borderRadius:15
   },
   style_list_view:{
     width:deviceWidth-20,
     backgroundColor:'white',
     height:deviceHeight/6,
     alignSelf:'center',
     borderRadius:15,
     shadowColor: '#000',
     shadowOffset: { width: 0, height: 2 },
     shadowOpacity: .1,
     shadowRadius: 8,
     elevation: 3,
     marginTop:15,
     padding:10,
     justifyContent:'center'
   },
   backgroundStyle:{
     backgroundColor: '#FFF5F3',
    height:deviceHeight
   },
   style_day:{
     fontSize: 20,
     fontWeight:'600'
   }
 });
 
 export default App;
 