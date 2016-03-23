/*
 * @flow
 */

import React from 'react';
import Box from './box.jsx';

type propTypes = {
  msg:string
}

export default function App(props:propTypes) {
  const style = {
    color: 'gray',
    fontSize: 30
  };
  return (
    <div>
      <p style = {style} >Test one</p>
      <Box msg = {props.msg}></Box>
      <Box msg = {'how are'} ></Box>
    </div>
  );
}
