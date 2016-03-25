import AddNote from '../components/addnote.jsx';
import {addNote} from '../actions/addnote.js';
import { connect } from 'react-redux';

function mapDispatchToProps(dispatch) {
  return {
    onClick:(value) => {
      console.log(' iam mapDispatchToProps');
      dispatch(addNote(value));
    }
  };
}

const AddNoteCT = connect(null, mapDispatchToProps)(AddNote);
export default AddNoteCT;
