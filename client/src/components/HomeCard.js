//React requirements
import React from 'react';

//UI
import { Divider, Image, List, Segment } from 'semantic-ui-react';

//styles
import Radium from 'radium';
import styles from '../styles/HomeStyles';

let pusheen = 'http://25.media.tumblr.com/13bbe1de2ff21654eaae0cc29d514753/tumblr_mndyhaRTa11s2cbulo1_400.gif';

@Radium
export default class HomeCard extends React.Component {
  render() {
    let style = this.props.stacked ? styles.stackedCard : {};
    return (
      <Segment style={ ( styles.segmentSize, style ) }>
        <h1>{this.props.title}</h1> 
        <Divider style={ styles.innerScrollHeader }/>

        <div style={ styles.innerScroll }>
          { 
            this.props.children ? this.props.children : (
              <List>
                { 
                  ['a', 's', '324', '32', '34'].map((item, key) => (
                    <List.Item key={key}>
                      <Image avatar src={pusheen} />
                      <List.Content>
                        <List.Header> Lorem ipsum </List.Header>
                        <List.Description>
                          FizzBuzz seems like a better choice
                        </List.Description>
                      </List.Content>
                      <Divider />
                    </List.Item> 
                  ))
                }
              </List>)
          }
        </div>
      </Segment>
    );
  }
}
