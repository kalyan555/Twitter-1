import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab,
    Button, Left, Right, Body, Icon,
    Text,Card, CardItem,Tab,Tabs,TabHeading,Thumbnail,Item,Input,
    List,ListItem
   } from 'native-base';

   import {Image } from 'react-native';


export default class SideBar extends Component {
    constructor(props) {
        
                super(props);
        
                this.state = {
        
                    shadowOffsetWidth: 1,
        
                    shadowRadius: 4,
        
                };
        
            }


  render() {

    let f1=`500  `;
    let f2=`  600  `;

    return (
      <Container style={{marginTop:30}}>
        
        <Content>
        <Thumbnail large source={require('./../images/choc.jpg')} style={{marginLeft:12}} />
        <Text style={{marginLeft:10,fontSize:23,fontWeight: 'bold'}}>
            Chocolate
        </Text>
        <Text style={{marginLeft:10,fontSize:15,color:"gray"}}>
            @Chocolate12

        </Text>

        <Text style={{marginLeft:10,marginBottom:10}}> 

                    <Text style={{fontWeight: 'bold',}}>
                           {f1}
                            </Text>
                            <Text style={{color:"gray"}}>
                                  Followers
                                </Text>

                                <Text style={{fontWeight: 'bold'}}>
                         {f2}
                            </Text>
                            <Text style={{color:"gray"}}>
                                  Following
                                </Text>   
            </Text>


        <List style={{borderTopWidth:0.6}}>
            <ListItem icon>
              <Left>
                <Icon name="md-settings" />
              </Left>
              <Body>
                <Text>Settings</Text>
              </Body>
              
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="md-share" />
              </Left>
              <Body>
                <Text>Share</Text>
              </Body>
              
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="md-help-circle" />
              </Left>
              <Body>
                <Text>Help</Text>
              </Body>
              
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="md-notifications" />
              </Left>
              <Body>
                <Text>Notifications</Text>
              </Body>
              
            </ListItem>
          </List>

          <List>
            <ListItem>
              <Text>Contact</Text>
            </ListItem>
            <ListItem>
              <Text>About us</Text>
            </ListItem>
    
          </List>


        </Content>

        <Footer>
          <FooterTab>
              <Left>
            <Button>
              <Icon name="logo-googleplus" />
            </Button>
            </Left>
            <Right>
            <Button>
              <Icon name="logo-facebook" />
            </Button>
            </Right>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}