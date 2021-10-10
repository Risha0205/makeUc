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

 
 class Home extends Component{
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
       <SafeAreaView style={styles.backgroundStyle}>
       <StatusBar  />
 
    
         <View style={styles.style_header}>
            <TouchableOpacity style={{backgroundColor:'white'}} onPress={()=>this.onPressLeft()}>
              <Text>Journal Entry</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{backgroundColor:'white'}}onPress={()=>this.onPressRight()}>
            <Text>Partner's Journal</Text>
            </TouchableOpacity>
         </View>
         <View style={styles.style_grid}> 
           <Text style={{alignSelf:'center',marginTop:20, fontSize: 22}}>Today, 09 Oct 2021</Text>
           <Text style={{alignSelf:'center',marginTop:8, fontSize:16}}>Saturday</Text>
 
           <Text style={{alignSelf:'center',marginTop:30, fontSize:16}}>Emotions: How are you feeling ?</Text>
           <View style={{flexDirection:'row', marginTop:20, justifyContent:'space-evenly'}}>
             <TouchableOpacity style={{alignItems:'center',justifyContent:'center'}}>
             <Image style={{width:40,height:40}} source={require("../images/emotion1.png")} />
             <Text style={{fontSize:10}}>Depressed</Text>
             </TouchableOpacity>
 
             <TouchableOpacity style={{alignItems:'center',justifyContent:'center'}}>
             <Image style={{width:40,height:40}} source={require("../images/emotion2.png")} />
             <Text style={{fontSize:10}}>Upset</Text>
             </TouchableOpacity>
 
             <TouchableOpacity style={{alignItems:'center',justifyContent:'center'}}>
             <Image style={{width:40,height:40}} source={require("../images/emotion3.png")} />
             <Text style={{fontSize:10}}>Neutral</Text>
             </TouchableOpacity>
 
             <TouchableOpacity style={{alignItems:'center',justifyContent:'center'}}>
             <Image style={{width:40,height:40}} source={require("../images/emotion4.png")} />
             <Text style={{fontSize:10}}>Happy</Text>
             </TouchableOpacity>
 
             <TouchableOpacity style={{alignItems:'center',justifyContent:'center'}}>
             <Image style={{width:40,height:40}} source={require("../images/emotion5.png")} />
             <Text style={{fontSize:10}}>Joyful</Text>
             </TouchableOpacity>
           </View>
 
           <Text style={{alignSelf:'center',marginTop:30, fontSize:16}}>Sleep: How are last night's sleep ?</Text>
           <View style={{flexDirection:'row', marginTop:20, justifyContent:'space-evenly'}}>
             <TouchableOpacity style={{alignItems:'center',justifyContent:'center'}}>
             <Image style={{width:40,height:40}} source={require("../images/sleep1.png")} />
             <Text style={{fontSize:10}}>None</Text>
             </TouchableOpacity>
 
             <TouchableOpacity style={{alignItems:'center',justifyContent:'center'}}>
             <Image style={{width:40,height:40}} source={require("../images/sleep2.png")} />
             <Text style={{fontSize:10}}>Terrible</Text>
             </TouchableOpacity>
 
             <TouchableOpacity style={{alignItems:'center',justifyContent:'center'}}>
             <Image style={{width:40,height:40}} source={require("../images/sleep3.png")} />
             <Text style={{fontSize:10}}>Broken</Text>
             </TouchableOpacity>
 
             <TouchableOpacity style={{alignItems:'center',justifyContent:'center'}}>
             <Image style={{width:40,height:40}} source={require("../images/sleep4.png")} />
             <Text style={{fontSize:10}}>Enough</Text>
             </TouchableOpacity>
 
             <TouchableOpacity style={{alignItems:'center',justifyContent:'center'}}>
             <Image style={{width:40,height:40}} source={require("../images/sleep5.png")} />
             <Text style={{fontSize:10}}>Broken</Text>
             </TouchableOpacity>
           </View>
                 <TouchableOpacity style={styles.style_button}>
                   <Text style={{color:'white', fontSize:20, fontWeight:'600'}}>Save</Text>
                 </TouchableOpacity>
         </View>
 <FlatList
         data={listdata}
         renderItem={({item}) => this.listView(item)}
         style={{marginTop:10}}
       />
    
     </SafeAreaView>
     )
   }
 
 listView(item){
   return(
     <View style={styles.style_list_view}>
   <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
               <View style={{flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                 <Text style={styles.style_day}>{item.day}</Text>
                 <Text>{item.date}</Text>
               </View>
 
               <View style={{flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
               <Text style={{padding:8}}>Emotions: {item.emotions}</Text>
                 <Text>Sleep: {item.sleep}</Text>
               </View>
   
   </View>
     </View>
   
   )
 }

 onPressLeft(){
  this.props.navigation.navigate('JournalEntry')
}

onPressRight(){
  this.props.navigation.navigate('PartnerJournal')
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
     width:deviceWidth,
     flexDirection:'row',
     justifyContent:'space-evenly',
     alignItems:'center'
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
     fontWeight:'600',
     padding:7
   }
 });
 
 export default Home;
 
 