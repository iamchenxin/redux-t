import React from 'react';
import Box from './box.jsx';

export default function App(props){
  const style = {
    color: 'gray',
    fontSize: 30
  };
  return (
    <div>
      <p style = {style} >Test one</p>
      <Box msg = {props.msg}></Box>
    </div>
  );
}
