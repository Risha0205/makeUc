/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as Journal} from './app.json';
import Amplify from 'aws-amplify'
import awsConfig from './config'
Amplify.configure(awsConfig)

AppRegistry.registerComponent(Journal, () => App);
