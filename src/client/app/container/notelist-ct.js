import NoteList from '../components/notelist.jsx';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  const fontsize = MakeRandomNumber(8, 60);
  const notelist = state.noteRD.map( data => {
    return {
      note: data.text,
      style: {
        fontSize: fontsize(),
        color: 'pink'
      }
    };
  });
  const data = {
    notelist: notelist,
    style: {
      listStyleType: 'square',
      color: 'gray'
    }
  };
  return data;
}

function MakeRandomNumber(min, max) {
  return function() {
    const rt = (Math.random()*(max-min)+min);
    return parseInt(rt, 10);
  };
}

const NoteListCT = connect(mapStateToProps)(NoteList);
export default NoteListCT;
