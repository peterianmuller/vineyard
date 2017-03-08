//React requirements
import React from 'react';

//UI
import { Segment } from 'semantic-ui-react';

//Components
import ChatInput from '../components/ChatInput';
import MessageWindow from '../components/MessageWindow';

//Styles
import styles from '../styles/ChatMessage';

export default props => (
  <Segment style={styles.chatBox}>
    <MessageWindow user={props.user} dispatch={props.dispatch} messages={props.messages} />
    <ChatInput 
      currentRoom={props.currentRoom}
      user={props.user} 
      dispatch={props.dispatch}
      messages={props.messages} 
    />
  </Segment>
);
