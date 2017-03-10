export default {
  contentStyle: function(left, solo, bottomOnly) {
    return {
      maxWidth: '40%',
      paddingRight: '0.5em',
      paddingLeft: '0.5em',
      marginRight: !left && (solo || bottomOnly) ? '0px' : '35px',
      marginLeft: left && (solo || bottomOnly) ? '0px' : '35px',
      marginTop: '0px',
    };
  },

  commentStyle: function(left, solo, bottomOnly, topOnly) {
    return {
      display: 'flex',
      flexDirection: left ? 'row' : 'row-reverse',
      flexAlign: left ? 'flex-start' : 'flex-end',
      textAlign: left ? 'left' : 'right',
      margin: 0,
      width: '100%',
      paddingTop: solo || topOnly ? '1.5em' : '0px',
      paddingBottom: solo || bottomOnly ? '1.5em': '0px',
    };
  },

  commentTextStyle: function(left, radius) {
    return {
      textAlign: 'left',
      border: '0 solid black',
      backgroundColor: left ? '#42cbf4' : '#d6d6d6', 
      borderRadius: left ? 
                    radius[0] + ' 25px 25px ' + radius[1] : 
                    '25px ' + radius.join(' ') + ' 25px',
      padding: '0.5em 1.5em 0.5em 1.5em',
      marginTop: '2px',
      marginBottom: '2px'
    }
  },

  aviStyle: {
    float: 'none'
  },

  roomSelector: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 1em 0 1em',

  },

  roomSelectorSegment: {
    margin: '0em 1em 1em 1em',
    height: '87%',
  },

  chatBox: {
    width: '75%',
    margin: '0em 1em 1em 1em',
    padding: '1em 1em 0 1em',
  },
  
  messageWindow: { 
    display: 'flex',
    justifyContent: 'center', 
    width: '100%',
    height: '77%',
    flex: 1
  },
  
  rowStyle: {
    display: 'contents',
    breakAfter: 'always',
    justifyContent: 'flex-start',
    width: '90%',
    maxWidth: '90%',
  },

  roomEntries: {
    overflowY: 'scroll',
    height: '90%',
  },

  roomFont: {
    fontSize: '2vw',

  },
};
