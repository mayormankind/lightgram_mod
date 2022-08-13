import {AddPhotoAlternateOutlined} from '@material-ui/icons';
import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { Box, Container } from './Notifications';
import styled from 'styled-components';
import { Avatar } from '@material-ui/core';
import Post from '../subComponent/Posts';
import BackColor from '../Library/BackColor';
import MakePost from '../Home/MakePost';
import NavBar from '../subComponent/NavBar';
import Menu from './Menu';

const Posts = [
  {
    userName:'Makinde Mayowa',
    postsBody: 'We are like pencils in the hands of our creator. Therefore lets all lead a peaceful life that we may have a regular wave pattern',
    time:'2hrs',
    avatarImg: 'https://res.cloudinary.com/dcesze7l8/image/upload/v1650155133/mayowa_qlz847.jpg',
    id: 0
  },
  {
    userName:'Makinde Mayokun',
    postsBody: 'PRAYER What is Prayer? Prayer is giving our attention to God in a two-way spiritual relationship where we talk to God and also listen to Him. Prayer is like a child’s conversation with their father. It is natural for a child to ask his father for the things they need, or to ask for advice or guidance and look forward to his response.God has established prayer as the means by which we receive his supernatural help. And without supernatural help, we cannot live a life worthy of the gospel.',
    time:'12hrs',
    avatarImg: 'https://res.cloudinary.com/dcesze7l8/image/upload/v1650155126/mayokun_bgs74c.jpg',
    id: 1
  },
  {
    userName:'Makinde Muyiwa',
    postsBody: 'PRAYER What is Prayer? Prayer is giving our attention to God in a two-way spiritual relationship where we talk to God and also listen to Him. Prayer is like a child’s conversation with their father. It is natural for a child to ask his father for the things they need, or to ask for advice or guidance and look forward to his response.God has established prayer as the means by which we receive his supernatural help. And without supernatural help, we cannot live a life worthy of the gospel.',
    time:'10hrs',
    avatarImg: 'https://res.cloudinary.com/dcesze7l8/image/upload/v1650155136/muyiwa_gg8znm.jpg',
    id: 2
  },
  {
    userName:'Makinde Morire',
    postsBody: 'Prayer is a conversation with God, and every conversation begins by addressing the person to whom you are speaking by name. Jesus begins with “Our Father in heaven.” He focuses on a distinct person, the Heavenly Father with whom he has a personal relationship. We share the same right to call God “Father,”',
    time:'10mins',
    avatarImg: 'https://res.cloudinary.com/dcesze7l8/image/upload/v1650155134/morire_k5nbdi.jpg',
    id: 3
  },
  {
    userName:'Tolulope',
    image: 'https://res.cloudinary.com/dcesze7l8/image/upload/v1650155134/morire_k5nbdi.jpg',
    time:'10mins',
    avatarImg: 'https://res.cloudinary.com/dcesze7l8/image/upload/v1650155134/morire_k5nbdi.jpg',
    id: 4
  },
  {
    userName:'Itz Modupe',
    postsBody: 'There is no ‘hidden secret’ when it comes to prayer. God is always alongside us and ready to listen.',
    time:'10mins',
    avatarImg: 'https://res.cloudinary.com/dcesze7l8/image/upload/v1650155135/modupe_xj4vjr.jpg',
    id: 5
  },
  {
    userName:'Jumoke Makinde',
    image: 'https://res.cloudinary.com/dcesze7l8/image/upload/v1650155136/muyiwa_gg8znm.jpg',
    time:'10mins',
    avatarImg: 'https://res.cloudinary.com/dcesze7l8/image/upload/v1650155135/modupe_xj4vjr.jpg',
    id: 6
  },
  {
    userName:'Mayowa Makinde',
    postsBody: 'There is no ‘hidden secret’ when it comes to prayer. God is always alongside us and ready to listen.',
    // video: 'images/vid.mp4',
    time:'10mins',
    avatarImg: 'https://res.cloudinary.com/dcesze7l8/image/upload/v1650155135/modupe_xj4vjr.jpg',
    id: 7
  }
];


function Home() {

  const [modal,setModal] = useState(false);
  function makePost(){
    setModal(true);
    console.log('clicked')
  }
  function back(){
   setModal(false);     
  }
  return (
      <Homewrap>
        <PostWrap>
          <Postheader>
            <Link to={'./profile'}><Avatar src={'https://res.cloudinary.com/dcesze7l8/image/upload/v1650154788/cld-sample.jpg'}/></Link>
              <PostAddCon onClick={makePost}>Make a Post...</PostAddCon>
              <Phototag>
                <label htmlFor="gallery"><AddPhotoAlternateOutlined style={{fontSize:'40px'}}/></label>
                <input type="file" id="gallery"/>
              </Phototag>
          </Postheader>
          <Post likes={2} posts={Posts} comments={4}/>
        </PostWrap>
        {modal ? <MakePost onCancel={back}/> : null}
        {/* {save ? } */}
      </Homewrap>
  )
}
export const Homewrap = styled.div`
max-width: 650px;
position: relative;
left: -17%;
padding: 0 20px;
padding-top: 75px;
padding-bottom: 30px;
@media(max-width:728px){
  padding: 62px 0;
  left: 0;
}`;
export const PostWrap = styled.div`
`;
export const Content = styled.div`

@media(max-width:728px){
}
`;
export const Memberslist = styled.li`
display: flex;
align-items: center;
padding: 5px;
border: 1px solid rgba(0,0,0,0.3);
h3{
  padding-left: 20px;
}
@media(max-width:728px){
 flex-direction:column ;
 border: none;
  }
  `;
export const Middle = styled.div`
  grid-area: 'post';
  `;
export const Righttab = styled.div`
grid-area: 'right';
width: 350px;
background: #fff;
height: 400px;
padding: 10px;
border-radius: 10px;
box-shadow: 0  1px 10px rgba(0,0,0,0.4);
@media(max-width:728px){
  width: 100%;
  border-radius: 0%;
}
`;
export const Updatesheader = styled.div`
  text-align: center;
`;
export const List = styled.li`
  
`;
export const Postheader = styled.div`
background:rgba(155,155,157,0.5);
display:flex;
position:relative;
justify-content: space-between;
align-items: center;
padding: 15px 30px;
border-top:1px solid rgba(0,0,0,0.2);
border-bottom: 1px solid rgba(0,0,0,0.2);
margin-bottom: 5px;
`;
export const Latest = styled.div`
`;
export const Updates = styled.ul`
  list-style: none;
  max-height: 70vh;
  overflow-y: scroll;
`;
export const Phototag = styled.div`
  display:flex;
  input{
    display:none;
  }
`;

export const PostAddCon = styled.div`
  cursor:pointer;
`;

export default Home;
