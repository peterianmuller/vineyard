//React requirements
import React from 'react';

//UI
import { Comment } from 'semantic-ui-react';

export default props => {
  var top = props.radius[1] === '5px';
  var bottom = props.radius[0] === '5px';

  var solo = props.radius[0] === '25px' && props.radius[1] === '25px';
  var bottomOnly = bottom && !(bottom && top);
  var topOnly = top && !(bottom && top);

  var aviStyle = {
    float: 'none'
  };

  var contentStyle = {
    maxWidth: '40%',
    paddingRight: '0.5em',
    paddingLeft: '0.5em',
    marginRight: !props.left && (solo || bottomOnly) ? '0px' : '35px',
    marginLeft: props.left && (solo || bottomOnly) ? '0px' : '35px',
    marginTop: '0px',
  };

  var commentStyle = {
    display: 'flex',
    flexDirection: props.left ? 'row' : 'row-reverse',
    flexAlign: props.left ? 'flex-start' : 'flex-end',
    textAlign: props.left ? 'left' : 'right',
    margin: 0,
    paddingTop: solo || topOnly ? '1.5em' : '0px',
    paddingBottom: solo || bottomOnly ? '1.5em': '0px',
  };

  var commentTextStyle = {
    textAlign: 'left',
    border: '0 solid black',
    backgroundColor: props.left ? '#42cbf4' : '#d6d6d6', 
    borderRadius: props.left ? 
                  props.radius[0] + ' 25px 25px ' + props.radius[1] : 
                  '25px ' + props.radius.join(' ') + ' 25px',
    padding: '0.5em 1.5em 0.5em 1.5em',
    marginTop: '2px',
    marginBottom: '2px'
  };

  return (
    <Comment style={commentStyle}>
      {
        solo || bottom && !(bottom && top) ? 
          (<Comment.Avatar 
             style={aviStyle}
             src={ props.left ? 'http://imgur.com/Ojc222a.jpg' :
               'http://imgur.com/ZmDsi5u.jpg'}
           />) : ''
      }
    	<Comment.Content style={contentStyle}>
        { 
          solo || top && !(bottom && top) ? 
            (<Comment.Author style={ { display: 'inline' } }>
               { props.author }
             </Comment.Author>) : ''
        }
        { 
          solo || top && !(bottom && top) ? (<Comment.Metadata style={ { display: 'inline' } }> 
                  Time info 
                </Comment.Metadata>) : ''
        }

    	  <Comment.Text style={commentTextStyle}>
          { props.text }
    	  </Comment.Text>
    	</Comment.Content>
    </Comment>
  );
}
