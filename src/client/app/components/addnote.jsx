import React from 'react';
import {addNote} from '../actions/addnote.js';

class AddNote extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.input = null;
  }
  render() {
    return (
      <div>
        <input ref = { _ref => this.input = _ref }></input>
        <button onClick = {this.add} > OK </button>
      </div>
    );
  }

  add = (event) => {
    console.log(` input value = ${this.input.value}`);
  //  console.dir(this.context.store);
    this.context.store.dispatch(addNote(this.input.value));
  }
}
AddNote.contextTypes = { store: React.PropTypes.object};

export default AddNote;
