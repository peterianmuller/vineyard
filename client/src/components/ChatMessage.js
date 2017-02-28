//React requirements
import React from 'react';

//UI
import { Comment } from 'semantic-ui-react';

export default props => {
  var aviStyle = {
    float: 'none'
  };

  var contentStyle = {
    width: '40%',
    padding: '0.5em',
  };

  var commentStyle = {
    display: 'flex',
    flexDirection: props.left ? 'row' : 'row-reverse',
    flexAlign: props.left ? 'flex-start' : 'flex-end',
    textAlign: props.left ? 'left' : 'right',
    margin: 0,
    padding: 0,
  };

  var commentTextStyle = {
    border: '0 solid black',
    backgroundColor: props.left ? '#42cbf4' : '#d6d6d6', 
    borderRadius: props.left ? '5px 12% 12% 12%' : '12% 5px 12% 12%',
    padding: '1.5em'
  };

  return (
    <Comment style={commentStyle}>
    	<Comment.Avatar style={aviStyle}src='http://imgur.com/Ojc222a.jpg' />
    	<Comment.Content style={contentStyle}>
    	  <Comment.Author style={ { display: 'inline' } }>{ props.author }</Comment.Author> 
    	  <Comment.Metadata style={ { display: 'inline' } }> Time info </Comment.Metadata>

    	  <Comment.Text style={commentTextStyle}>
    	    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt maximus eleifend. Mauris ornare arcu ultrices leo tincidunt euismod. Vivamus eget justo et leo ullamcorper euismod. Aliquam vitae dolor molestie, interdum quam id, fermentum sem. Donec pharetra tempor mi nec blandit. Phasellus ut aliquam risus. Morbi condimentum sapien nec ante laoreet, et condimentum augue feugiat. Ut auctor orci at ipsum semper consequat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec egestas nunc vel augue mollis, ac feugiat risus suscipit. In eget tellus elit. Nullam eu augue cursus, elementum leo sagittis, sollicitudin mauris. Aliquam at gravida lectus. Proin laoreet a urna sit amet commodo.
    	  </Comment.Text>
    	</Comment.Content>
    </Comment>
  );
}
