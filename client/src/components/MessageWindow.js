//React requirements
import React from 'react';

//UI
import { Button, Comment, Form, Grid, Header } from 'semantic-ui-react';

//Components
import ChatMessage from './ChatMessage';

export default props => {
  var rowStyle = {
    display: 'contents',
    breakAfter: 'always',
    justifyContent: 'flex-start',
    width: '100%'
  };
    
  var fakeMessages = [
    {
      author: 'Tim',
      text: 'Adding another one above top one',
      left: false
    },
    {
      author: 'Tim',
      text: 'This is the top one',
      left: false
    },
    {
      author: 'Tim',
      text: 'This is the middle one',
      left: false
    },
    {
      author: 'Tim',
      text: 'This is the second middle one',
      left: false
    },
    {
      author: 'Tim',
      text: 'This is the bottom one',
      left: false
    }
  ];

  return (
    <div style={ { display: 'flex', justifyContent: 'center' } }>
    	<Comment.Group style={rowStyle}>
    	  <ChatMessage author='Aaron' left={true} radius={ ['50px',  '50px'] } />
    	  <ChatMessage author='Tim' left={false} radius={ ['50px', '50px'] } />
        {
          fakeMessages.map((value, key) => {
            var radius = ['50px', '50px'];

            if (key > 0 && fakeMessages[key - 1].author === value.author) {
              radius[0] = '5px';
            } 
            
            if (key + 1 < fakeMessages.length && 
                fakeMessages[key + 1].author === value.author) {
              radius[1] = '5px'; 
            }


            return (
              <ChatMessage 
                key={key}
                author={value.author}
                text={value.text} 
                left={!(value.author === 'Tim')} 
                radius={radius}
              />);
          })
        }
    	</Comment.Group>
    </div>
  );
}


