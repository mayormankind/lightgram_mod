import React,{useState} from 'react';
import { Box, Container,Boxw } from '../Main/Notifications';
import { Avatar, IconButton } from '@material-ui/core';
import styled from 'styled-components';
import { CommentOutlined, FavoriteBorder, Favorite, MoreHorizOutlined } from '@material-ui/icons';
import {Text} from '../subComponent/Posts';
import CommentBox from './CommentBox';
import PostActions from './savedPosts/PostActions';
import BackColor from '../Library/BackColor';


function PostCard(props) {
  const [heart, setHeart] = useState(false);
  const [comment, setComment] = useState(false);
  const [isShow,setIsShow] = useState(false);
    const Like=(id)=>{
        setHeart(true);
      }
      const UnLike=(id)=>{
        setHeart(false);
      }
  function ActionTag(){
    setIsShow(true);
  }
  function CloseTag(){
    setIsShow(false);
    console.log('gettat');
  }
  return (
    <li>
        <Container key={props.id} className='posts' style={{background:'white',borderRadius:'7px', padding:'7px 2px', marginBottom:'5px'}}>
            <Box className='postHeader' style={{padding:'2px 30px'}}>
                <Avatar src={props.avatarImg} />
                <div className="details">
                  <Text>{props.userName}</Text>
                  <span style={{fontSize:'x-small'}}>{props.time}</span>
                </div>
                <IconButton onClick={ActionTag}>
                  <MoreHorizOutlined/>
                </IconButton>
            </Box>
            {isShow && <BackColor onClick={CloseTag}/>}
            {isShow && <PostActions/>}
                {(props.postsBody)?(
                <Box className='postBody' style={{border:'1px solid rgba(155,155,155,0.5)', width:'100%',minHeight:'250px', padding: '10px 10px', textAlign:'center', fontSize:'25px'}}><Text>{props.postsBody}</Text></Box>) : (
                  <Box className='postBody' style={{border:'1px solid rgba(155,155,155,0.5)', width:'100%', padding: '0px 0px'}}><img style={{width:'100%', height:'100%'}} alt={props.userName} src={props.image}/></Box>)}
            <Boxw className='postFooter' style={{padding:'5px 10px'}}>
              {heart ? (
                <div onClick={()=>UnLike(props.id)}>
                  <Favorite style={{color:'red', marginInline:'5px'}} />
                  <p style={{marginInline:'5px', color:'black'}}>{heart ? props.likes + 1 : props.likes}</p>
                </div>  
              ):(
                <div onClick={()=>Like(props.id)}>
                  <FavoriteBorder style={{marginInline:'5px'}}/>
                  <p style={{marginInline:'5px', color:'black'}}>{heart ? props.likes - 1 : props.likes}</p>
                </div>
              )}
              <div onClick={()=>setComment(true)}>
                <CommentOutlined style={{marginInline:'5px'}}/>
                <p style={{marginInline:'5px', color:'black'}}>{props.comments}</p>
              </div>
            </Boxw>
            {comment && <CommentBox comments={props.comments}/>}
        </Container>
    </li>
  )
}

export default PostCard;