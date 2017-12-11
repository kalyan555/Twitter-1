import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab,
   Button, Left, Right, Body, Icon,
   Text,Card, CardItem,Tab,Tabs,TabHeading,Thumbnail,Item,Input
  } from 'native-base';

import {DrawerNavigator} from 'react-navigation';

  import {Image,ScrollView } from 'react-native';
import Infor from './components/contents';

import Home from './home';

import SideBar from './components/SideBar';

const App= DrawerNavigator(
      {
           HomeScreen:{
             screen:Home 
           },
           OtherScreen:{
            screen:Home 
          }
      },
      {
        initialRouteName:"HomeScreen",
        contentComponent: props => <SideBar {...props} />
      }
    );

  export default App;
