
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
  FlatList,
  TextInput
  
} from 'react-native';
import { WebView } from 'react-native-webview';
import { Auth } from 'aws-amplify'
let deviceWidth = (Dimensions.get('window').width);
let deviceHeight = (Dimensions.get('window').height);

class Registration extends Component{
   state = {
       username:'', name: '', family_name:'', email: '', password: ''
      };

      changeValue = (key, value) => {
        const state = this.state;
        state[key] = value;
         this.setState({state});
      
      }

  async signUp( username,name,family_name, email, password ){
    
     Auth.signUp({ username, password, attributes: { email , name,family_name}}).then((user) => {
      console.log('userREG', user)
      this.props.navigation.navigate('CodeVerify',{username: username})
   
  })
  .catch(err => {
    if (err) {
      console.log(err)
      return;
    }

  });


    //  .then(async()=>{
    //   await Auth.confirmSignUp(username,'700877')
    //   console.log('user successfully signed up')
    // })
   

  }
    render(){
     

    
return(
<View style={{alignItems:'center',justifyContent:'center',height:deviceHeight,width:deviceWidth,backgroundColor:'#FFF5F3'}}>
          <TextInput
              placeholder='usernamre'
              value={this.state.username}
              keyboardType="email-address"
              textColor="#788b91"
              style={{ width: deviceWidth - 80, backgroundColor: 'white', height: 50, alignItems: 'center', justifyContent: 'center', paddingLeft: 20, color: '#788b91',paddingBottom: 0,borderWidth:1,borderColor:'#cfcfcf'  }}
              autoCorrect={false}
              tintColor="transparent"
              baseColor='transparent'
              fontSize={16}
              editable={true}
              textNoSuggestions={false}
              onChangeText={(val) => {
                this.changeValue('username', val.trim())
              }}
              maxLength={40}
            />

<TextInput
              placeholder='name'
              value={this.state.name}
              keyboardType="email-address"
              textColor="#788b91"
              style={{marginTop:10, width: deviceWidth - 80, backgroundColor: 'white', height: 50, alignItems: 'center', justifyContent: 'center', paddingLeft: 20, color: '#788b91',paddingBottom: 0,borderWidth:1,borderColor:'#cfcfcf'  }}
              autoCorrect={false}
              tintColor="transparent"
              baseColor='transparent'
              fontSize={16}
              editable={true}
              textNoSuggestions={false}
              onChangeText={(val) => {
                this.changeValue('name', val.trim())
              }}
              maxLength={40}
            />


<TextInput
              placeholder='family_name'
              value={this.state.family_name}
              keyboardType="email-address"
              textColor="#788b91"
              style={{marginTop:10, width: deviceWidth - 80, backgroundColor: 'white', height: 50, alignItems: 'center', justifyContent: 'center', paddingLeft: 20, color: '#788b91',paddingBottom: 0,borderWidth:1,borderColor:'#cfcfcf'  }}
              autoCorrect={false}
              tintColor="transparent"
              baseColor='transparent'
              fontSize={16}
              editable={true}
              textNoSuggestions={false}
              onChangeText={(val) => {
                this.changeValue('family_name', val.trim())
              }}
              maxLength={40}
            />


<TextInput
              placeholder='email'
              value={this.state.email}
              keyboardType="email-address"
              textColor="#788b91"
              style={{marginTop:10, width: deviceWidth - 80, backgroundColor: 'white', height: 50, alignItems: 'center', justifyContent: 'center', paddingLeft: 20, color: '#788b91',paddingBottom: 0,borderWidth:1,borderColor:'#cfcfcf'  }}
              autoCorrect={false}
              tintColor="transparent"
              baseColor='transparent'
              fontSize={16}
              editable={true}
              textNoSuggestions={false}
              onChangeText={(val) => {
                this.changeValue('email', val.trim())
              }}
              maxLength={40}
            />

<TextInput
              placeholder='password'
              value={this.state.password}
              keyboardType="email-address"
              textColor="#788b91"
              style={{marginTop:10, width: deviceWidth - 80, backgroundColor: 'white', height: 50, alignItems: 'center', justifyContent: 'center', paddingLeft: 20, color: '#788b91',paddingBottom: 0,borderWidth:1,borderColor:'#cfcfcf'  }}
              autoCorrect={false}
              tintColor="transparent"
              baseColor='transparent'
              fontSize={16}
              editable={true}
              textNoSuggestions={false}
              onChangeText={(val) => {
                this.changeValue('password', val.trim())
              }}
              maxLength={40}
            />
            <TouchableOpacity onPress={()=>this.signUp(this.state.username,this.state.name,this.state.family_name,this.state.email,this.state.password)} style={styles.style_button}>
        
                        <Text style={{color:'white',fontSize:18,fontWeight:'600'}}>Sign Up</Text>
                   
</TouchableOpacity>
</View>
  
 )
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


export default Registration;