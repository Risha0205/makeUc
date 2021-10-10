import React, { useEffect, useState ,Component} from 'react';
import Amplify, { Auth, Hub } from 'aws-amplify';
import awsconfig from '../../../config';
Amplify.configure(awsconfig);
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
let deviceWidth = (Dimensions.get('window').width);
let deviceHeight = (Dimensions.get('window').height);


class Login extends Component{
  state = { user: null, customState: null,email:'', password:'' };

  changeValue = (key, value) => {
    const state = this.state;
    state[key] = value;
     this.setState({state});
  
  }

    render(){
      const { user, email,password } = this.state;
    
return(
  <View style={{alignItems:'center',justifyContent:'center',height:deviceHeight,width:deviceWidth,backgroundColor:'#FFF5F3'}}>
          <TextInput
              placeholder='email'
              value={this.state.email}
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
                this.changeValue('email', val.trim())
              }}
              maxLength={40}
            />

<TextInput
              placeholder='password'
              value={this.state.password}
              keyboardType="email-address"
              textColor="#788b91"
              style={{marginTop:20, width: deviceWidth - 80, backgroundColor: 'white', height: 50, alignItems: 'center', justifyContent: 'center', paddingLeft: 20, color: '#788b91',paddingBottom: 0,borderWidth:1,borderColor:'#cfcfcf'  }}
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



  <TouchableOpacity onPress={()=>this.onPressSignn(this.state.email,this.state.password)} style={styles.style_button}>
        
        <Text style={{color:'white',fontSize:18,fontWeight:'600'}}>Sign In</Text>
   
</TouchableOpacity>
  </View>
 )
    }

    onPressSignn(email,password){
      Auth.signIn(email, password)
      .then(user => {
        this.props.navigation.navigate('Home')
       // navigation.navigate('Main');
      })
      .catch(err => {
        if (err) {
          alert(err)
          return;
        }

      });
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


export default Login;