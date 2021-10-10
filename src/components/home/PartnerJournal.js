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
  ImageBackground
} from 'react-native';
let deviceWidth = (Dimensions.get('window').width);
 let deviceHeight = (Dimensions.get('window').height);

class PartnerJournal extends Component{
    render(){
        return(
            <ImageBackground style={{width:deviceWidth, height:deviceHeight}} source={require('../images/partnerj.png')}>

            </ImageBackground>
        )
    }
}

export default PartnerJournal;