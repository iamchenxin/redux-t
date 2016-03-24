/*
 * @flow
 */
import React from 'react';
type propTypes = {
  msg:string
};

export default function Box(props:propTypes) {
  return (
    <div> hello ! [{props.msg}] </div>
  );
}
Box.propTypes = {
  msg:React.PropTypes.string.isRequired
};
