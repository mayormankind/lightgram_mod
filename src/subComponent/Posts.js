import React, {useState} from 'react';
import styled from 'styled-components';
import PostCard from '../Home/PostCard';


function Post(props) {
  return (
    <ul>
      {props.posts.map((post)=>(
      <PostCard 
        key={post.id}
        id={post.id}
        avatarImg={post.avatarImg}
        userName={post.userName}
        time={post.time}
        postsBody={post.postsBody}
        image={post.image}
        likes={props.likes}
        comments={props.comments}
        />))}
    </ul>
  )
}
export const Text = styled.div`
  font-family: cursive;
  /* font-weight: ; */
`;
export default Post;