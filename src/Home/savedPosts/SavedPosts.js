import React from 'react';
import PostCard from '../PostCard';
import styled from 'styled-components';


function SavedPosts() {
  const Saved = [
  
  ]
  return (
    <SavedWrap>
      <div>
        {
          (Saved.length===0)?(
            <div>
              <h3>No posts saved yet</h3>
            </div>
          ):(
            Saved.map(each=>(
              <PostCard/>
            ))
          )
        }
      </div>
    </SavedWrap>
  )
}
export const SavedWrap = styled.div`
  background: #000;
`;

export default SavedPosts;