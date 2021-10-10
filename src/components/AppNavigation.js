import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, stackViewStyleInterpolator} from 'react-navigation';
import Login from '../components/user-module/Login';
import Registration from '../components/user-module/Registration';
import Home from '../components/home/Home';
import Walkthrough from '../components/user-module/Walkthrough';
import Dashboard from '../components/user-module/Dashboard';
import CodeVerify from '../components/user-module/CodeVerify'
import PartnerJournal from '../components/home/PartnerJournal';
import JournalEntry from '../components/home/JournalEntry';

const AppNavigation = createStackNavigator({
    Walkthrough:{screen:Walkthrough},
           Dashboard:{screen:Dashboard},
           Login: {screen: Login},
          Registration:{screen:Registration},
          CodeVerify:{screen:CodeVerify},
             Home:{screen: Home},
             JournalEntry:{screen:JournalEntry},
             PartnerJournal:{screen:PartnerJournal}
            
},{
    index:0,
   
},
{
    navigationOptions: {
        gesturesEnabled:false,
        
    }})

const StackNavigatorConfig = {
    stackViewStyleInterpolator:() =>( {
        transitionSpec:{
            duration:0

        }
    })
}

const App = createAppContainer(AppNavigation, StackNavigatorConfig)

export default App;

