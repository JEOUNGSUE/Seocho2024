import React, { useState } from 'react';

function Button(props) {
  const handleClick = () => props.onClickFunction(props.value);
  return <button onClick={handleClick}>{props.value}</button>;
}

export default Button;
