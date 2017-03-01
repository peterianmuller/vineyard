//React requirements
import React from 'react';

//UI
import { Button, Comment, Grid, Header } from 'semantic-ui-react';

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
      author: 'Aaron',
      text:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt maximus eleifend. Mauris ornare arcu ultrices leo tincidunt euismod. Vivamus eget justo et leo ullamcorper euismod. Aliquam vitae dolor molestie, interdum quam id, fermentum sem. Donec pharetra tempor mi nec blandit. Phasellus ut aliquam risus. Morbi condimentum sapien nec ante laoreet, et condimentum augue feugiat. Ut auctor orci at ipsum semper consequat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec egestas nunc vel augue mollis, ac feugiat risus suscipit. In eget tellus elit. Nullam eu augue cursus, elementum leo sagittis, sollicitudin mauris. Aliquam at gravida lectus. Proin laoreet a urna sit amet commodo.',
      left: true
    },
    {
      author: 'Aaron',
      text: 'Testing if second one works by breaking up',
      left: true
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
        {
          fakeMessages.map((value, key) => {
            var radius = ['25px', '25px'];

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


