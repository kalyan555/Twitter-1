import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
export default class contents extends Component {
  render() {
    return (
          <Card style={{backgroundColor:"blue"}}>
            <CardItem style={styles.cards} >
              <Left>
                <Thumbnail source={require('./../images/choco.jpg')} />
                <Body>
                  <Text style={{fontWeight: 'bold'}}>Chocolate</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem style={styles.cards}>
              <Body>
              <Text style={{marginBottom:10}}>
                Chocolate is delicious.
                </Text>
                <Image source={require('./../images/choci.jpg')} style={{height: 200, width: 320}}/>
              </Body>
            </CardItem>
            <CardItem style={styles.cards}>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="md-chatbubbles" />
                  <Text>50</Text>
                </Button>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="md-thumbs-up" />
                  <Text>400</Text>
                </Button>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="ios-heart" />
                  <Text>600</Text>
                </Button>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="ios-bookmark" />
                  <Text></Text>
                </Button>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="mail" />
                <Text></Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
    );
  }
}

const styles= StyleSheet.create({
cards:{
    backgroundColor:"white",
}


});