//React requirements
import React from 'react';

//UI
import { Button, Form, Input } from 'semantic-ui-react';

export default props => {
  var textStyle = {
    width: '100%',
    maxHeight: '3em',
    overflowY: 'scroll'
  };

  return (
    <div>
      <span contentEditable={true} className='ui input' style={textStyle} />
      <button style={ { float: 'right' } }>
        Submit
      </button>
    </div>
  );
};
