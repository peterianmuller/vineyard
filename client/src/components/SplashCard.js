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
          Welcome to your <span style={styles.logoText}>Vineyard</span>
        </h1>
      </Segment>
    );
  }
} 
