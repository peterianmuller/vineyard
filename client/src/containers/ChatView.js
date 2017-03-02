//React requirements
import React from 'react';

//UI

//Components
import ChatInput from '../components/ChatInput';
import MessageWindow from '../components/MessageWindow';

export default props => (
  <div className='max500width paddingOneEm'>
    <MessageWindow dispatch={props.dispatch} messages={props.messages} />
    <ChatInput dispatch={props.dispatch} messages={props.messages} />
  </div>
);
