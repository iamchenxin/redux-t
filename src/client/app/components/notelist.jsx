import React from 'react';
import Note from './note.jsx';

function NoteList({notelist, style}) {
  const totalStyle = Object.assign( {
    listStyleType: 'circle',
    color: 'Orange'
  }, style);
  console.log(totalStyle);
  return (
    <div>
    NoteList:
    <ul style = {totalStyle}>
      {(() => {
        return notelist.map(
          note => (<li> <Note {...note}/> </li>)
        );
      })()}
    </ul>
    </div>
  );
}

NoteList.propTypes = {
  notelist: React.PropTypes.arrayOf(React.PropTypes
    .shape(Note.propTypes)),
  style:React.PropTypes.shape({
    listStyleType: React.PropTypes.string,
    color: React.PropTypes.string
  })
};

export default NoteList;
