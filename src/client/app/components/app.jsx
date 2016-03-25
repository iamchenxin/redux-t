

import React from 'react';
import Box from './box.jsx';
import NoteListCT from '../container/notelist-ct.js';
import AddNoteCT from '../container/addnote-ct.js';

type propTypes = {
  context:mixed
}

class App extends React.Component {
  constructor(props: propTypes) {
    super(props);
  }

  getChildContext() {
    return { store:this.props.context.store};
  }

  render() {
    const style = {
      color: 'gray',
      fontSize: 30
    };
    return (
      <div>
        <p style = {style} >Test one</p>
        <Box msg = {'how are'} ></Box>
        <NoteListCT />
        <AddNoteCT />
      </div>
    );
  }
}
App.propTypes = {
  context:React.PropTypes.shape({
    store:React.PropTypes.object
  })
};
App.childContextTypes = {
  store: React.PropTypes.object
};

export default App;
