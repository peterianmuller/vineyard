//React requirements
import React from 'react';
import Radium from 'radium';

//UI
import { Comment } from 'semantic-ui-react';

//Stylesheets
import styles from '../styles/ChatMessage';

@Radium
export default class extends React.Component {
  render() {
    var top = this.props.radius[1] === '5px';
    var bottom = this.props.radius[0] === '5px';

    var solo = this.props.radius[0] === '25px' && this.props.radius[1] === '25px';
    var bottomOnly = bottom && !(bottom && top);
    var topOnly = top && !(bottom && top);

    return (
      <Comment style={styles.commentStyle(this.props.left, solo, bottomOnly, topOnly)}>
        {
          solo || bottom && !(bottom && top) ? 
            (<Comment.Avatar 
               style={styles.aviStyle}
               src={ this.props.left ? 'http://imgur.com/Ojc222a.jpg' :
                 'http://imgur.com/ZmDsi5u.jpg'}
             />) : ''
        }
      	<Comment.Content style={styles.contentStyle(this.props.left, solo, bottomOnly)}>
          { 
            solo || top && !(bottom && top) ? 
              (<Comment.Author style={ { display: 'inline' } }>
                 { this.props.author }
               </Comment.Author>) : ''
          }
          { 
            solo || top && !(bottom && top) ? (<Comment.Metadata style={ { display: 'inline' } }> 
                    Time info 
                  </Comment.Metadata>) : ''
          }

      	  <Comment.Text style={styles.commentTextStyle(this.props.left, this.props.radius)}>
            { this.props.text }
      	  </Comment.Text>
      	</Comment.Content>
      </Comment>
    );
  }
}
