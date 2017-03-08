//React requirements
import React from 'react';

//UI
import { Divider, Image, List, Segment } from 'semantic-ui-react';

//styles
import Radium from 'radium';
import styles from '../styles/HomeStyles';

@Radium
export default class HomeCard extends React.Component {
  render() {
    return (
      <Segment style={styles.segmentSize}>
        <h1>{this.props.title}</h1> 
        <Divider />
        <List>
        { 
          ['324', '32', '34'].map((item, key) => (
            <List.Item key={key}>
              <Image avatar src='http://25.media.tumblr.com/13bbe1de2ff21654eaae0cc29d514753/tumblr_mndyhaRTa11s2cbulo1_400.gif' />
              <List.Content>
                <List.Header> {item} Lorem ipsum </List.Header>
                <List.Description>
                  FizzBuzz seems like a better choice
                </List.Description>
              </List.Content>
            </List.Item> 
          ))
        }
        </List>
      </Segment>
    );
  }
}
