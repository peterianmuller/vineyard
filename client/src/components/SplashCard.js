//React requirements
import React from 'react';

//UI
import { Image, Segment } from 'semantic-ui-react';

//Styles
import styles from '../styles/HomeStyles';

export default class Home extends React.Component {
  render() {
    return (
      <Segment style={styles.splashCard}>
        <h1 style={styles.splashTitle}>
          Welcome to your 
					<div style={styles.nameText}>
            <div style={styles.imgContainer}>
        	  	<img style={styles.img} src='/wine-icon-22.png' /> 
            </div>
						<div style={styles.logoText}>Vineyard</div>
					</div>
        </h1>
      </Segment>
    );
  }
} 
