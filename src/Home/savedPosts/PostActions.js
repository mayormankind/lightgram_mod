import React,{useState} from 'react';
import styled from 'styled-components';

function PostActions(props) {
  const Act = [
    {
      id:1,
      listName:'Save Post',
      text:'Post Saved successful!'
    },
    {
      id:2,
      listName:'Report Post',
      text:'post reported as spam!'
    },
    {
      id:3,
      listName:'View Comments',
      text:'View'
    }
  ]
  return (
    <Main>
        <ul>
            {Act.map(each=>(
              <li onClick={()=>alert(each.text)} key={each.id}>{each.listName}</li>
            ))}
        </ul>
    </Main>
  )
}

export const Main = styled.div`
        background: #fff;
        width: 100%;
        height: 120px;
        position: fixed;
        bottom:0;
        right: 0;
        z-index: 1000;
        max-width: 500px;
        ul{
          li{
            display: grid;
            border: 1px solid gray;
            height: 40px;
            place-content: center;
            font-size: large;
            font-weight: bold;
            cursor: pointer;
          }
        }
`;
export default PostActions;