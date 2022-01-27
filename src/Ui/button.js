import React from 'react';

export default function button(props) {
  return <div>
      <button type="button" onClick={props.onClick} className="btn btn-dark">{props.name}</button>
  </div>;
}
