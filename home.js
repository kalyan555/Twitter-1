import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab,
   Button, Left, Right, Body, Icon,
   Text,Card, CardItem,Tab,Tabs,TabHeading,Thumbnail,Item,Input
  } from 'native-base';

  import {Image,ScrollView } from 'react-native';
import Infor from './components/contents';

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Header style={{
       marginTop:25,

        }}>
          <Left>
                  <Image
                  style={{width:50,height:50,borderRadius:25}}
                  source={require('./images/choc.jpg')}
                />
          </Left>
          <Body>
            <Title>Home</Title>
          </Body>
          <Right />

        </Header>
            <Tabs>

              <Tab heading={ <TabHeading><Icon name="ios-home" /></TabHeading>}>

              <ScrollView>
              <Infor />
              <Infor />
              <Infor />
                </ScrollView>

              </Tab>
              <Tab heading={ <TabHeading><Icon name="ios-search" /></TabHeading>}>
              <Header searchBar >
                <Item style={{borderRadius:25}}>
                  <Icon name="ios-search" />
                  <Input placeholder="Search" />
                  <Icon name="ios-people" />
                </Item>
                <Button transparent>
                  <Text>Search</Text>
                </Button>
              </Header>

              </Tab>
              <Tab heading={ <TabHeading><Icon name="md-notifications" /></TabHeading>}>
                
              </Tab>
              <Tab heading={ <TabHeading><Icon name="md-mail" /></TabHeading>}>
                
              </Tab>
            </Tabs>
           <Footer>
          <FooterTab>
          <Button>
              <Text>All</Text>
            </Button>
            <Button>
            <Text>Mentions</Text>
            </Button>
         <Right>
          
            <Button>
              <Icon name="cog" />
            </Button>
            </Right>
          </FooterTab>
        </Footer>


      </Container>
    );
  }
}
