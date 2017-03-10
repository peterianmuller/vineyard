//React requirements
import React from 'react';

//UI
import { Divider, Image, List, Segment, Icon } from 'semantic-ui-react';

//styles
import Radium from 'radium';
import styles from '../styles/HomeStyles';

// let pusheen = 'http://25.media.tumblr.com/13bbe1de2ff21654eaae0cc29d514753/tumblr_mndyhaRTa11s2cbulo1_400.gif';

//sticky note large
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
            this.props.title === 'Recent notes'? (
              <List>
                { 
                  this.props.children.map((item, key) => (
                    <List.Item key={key}>

                      { item.image_url ?
                        <Image avatar src={item.image_url} /> :             
                        <Icon name='sticky note'/>
                        
                      }

                      <List.Content>
                        <List.Header> {item.title} </List.Header>
                        <List.Description>
                          {

                            item.text.split('').slice(0,26).join('')

                          }
                        </List.Description>
                      </List.Content>
                      <Divider />
                    </List.Item> 
                  ))
                }
              </List>)
            : !this.props.children[0].vineyard ? (
              <List>


              </List>
  
              ) :(
              <List>
                {
                  this.props.children.map((item, key) => (
                    <List.Item key={key}>
                      <Icon name='bar graph large icon'/>
                      <List.Content>
                        <List.Header> {item.vineyard + ', row: '} {item.row} { 'block : ' + item.block + '.'} </List.Header>
                        <List.Description>
                         {item.method} is: {item.result}
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
