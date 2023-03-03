import React from 'react'

const Alert = ({ text, color }) => {
  console.log(text);
  console.log(color);
  return (
    <div
      className={`alert alert-${color}`}
      role="alert"
    >
      <h6>{text}</h6>
    </div>
  )
}

export default Alert