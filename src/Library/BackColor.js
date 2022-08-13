import React from 'react';

function BackColor(props) {
  return (
    <div className='backcolor' onClick={props.onClick} style={{background:'rgba(0,0,0,0.8)', position:'fixed',top:0,left:0,bottom:0,right:0}}/>
  )
}

export default BackColor;