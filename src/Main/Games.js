import React from 'react';
import NavBar from '../subComponent/NavBar';
import Post from '../subComponent/Posts'

function Games() {
  return (
      <div className=" tabsname games">
        <div className='game-header'>
            <h2>Games</h2>
        </div>
        <Post/>
        <NavBar click={'Games'}/>
      </div>
  )
}

export default Games