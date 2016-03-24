import React from 'react';

function Note(props) {
  var defaultStyle = {
    fontSize: 20,
    color: 'red'
  };
  Object.assign(defaultStyle, props.style);

  return (
    <div> note : <strong style = {defaultStyle}>{props.note}</strong> </div>
  );
}

Note.propTypes = {
  note:React.PropTypes.string.isRequired,
  style:React.PropTypes.shape({
    fontSize: React.PropTypes.number,
    color: React.PropTypes.string
  })
};

export default Note ;
