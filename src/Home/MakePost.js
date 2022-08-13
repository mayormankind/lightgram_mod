import styled from 'styled-components';
import { Box, Button, Container } from '@material-ui/core'
import { ArrowBack, Delete, PhotoCameraOutlined, Send, VideoLibraryOutlined } from '@material-ui/icons'
import React, {useState} from 'react';
import { Text } from '../subComponent/Posts';
import { Avatar } from '@material-ui/core';

function MakePost({onCancel}) {
    const [textChange,setText] = useState('');
    const [imageFile,setImage] = useState('');
    
    const imageSelect = (obj) =>{
        const picture = obj.target.files[0];
        console.log(picture);

        if (picture === '' || picture===undefined){
            alert('oti la danu');
            return;
        }
        setImage(picture);
    }
    function deleteImage(){
        setImage(false);
    }
  return (
      <ContainerWrap>
        <AttachmentBox className='makePost' style={{background:'white',height:'100%'}}>
            <Box className='makePost_header' style={{display:'flex', justifyContent:'space-between', borderBottom:'1px solid lightgray', alignItems:'center', marginBottom:'6px',padding:'10px 10px'}}>
                    <ArrowBack onClick={onCancel} style={{flex:'0.5'}}/>
                    <Text style={{color:'rgba(155,155,155,0.8)',fontSize:'large',flex:'1.5'}}>Create Post</Text>
                <Button style={{background:'orange', color:'white', padding:'5px 10px'}}>Upload <Send/></Button>
            </Box>
            <Container style={{padding:'10px 20px'}}>
                <Box style={{display:'flex',alignItems:'center'}}>
                    <Avatar style={{marginRight:'10px'}}/>
                    <Text style={{fontSize:'18px', fontWeight:'bold'}}>Makinde Mayowa Olalekan</Text>
                </Box>
                <TextArea style={{padding:'10px 0px'}}>
                    <textarea autoFocus={true} placeholder='Post waiting for your mind......' style={{padding:'10px',width:'100%', outlineColor:'green', border:'1px solid gray'}}></textarea>
                </TextArea>
                <ImageWrap>
                    <ImageTag>
                        <input type="file" style={{display:'none'}} accept='image/gif, image/jpeg, image/png' name='image' id='file' onChange={imageSelect} />
                        <label htmlFor="file">
                            <PhotoCameraOutlined/>
                            <p style={{paddingLeft:'5px'}}>Photos</p>               
                        </label>
                        {imageFile && <img src={URL.createObjectURL(imageFile)}/>}
                    </ImageTag>
                    <ImageTag>
                        <input type="file" style={{display:'none'}} accept='video/mp4' name='video' id='video' />
                        <label htmlFor="video">
                            <VideoLibraryOutlined/>
                            <p style={{paddingLeft:'5px'}}>Videos</p>               
                        </label>
                        <Delete onClick={deleteImage} style={{color:'rgba(0,0,0,0.5)', position:'absolute',top:'40px'}}/>
                    </ImageTag>                    
                </ImageWrap>
            </Container>
        </AttachmentBox>
      </ContainerWrap>
  )
}

export const ContainerWrap = styled.div`
    position:fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    background: rgba(0,0,0,0.8);
    padding-top: 52px;
`;
export const ImageWrap = styled.div`
`;
export const TextArea = styled.div`
    textarea{
        resize:none;
        min-height:100px;
    }
`;
export const AttachmentBox = styled.div`
width:100%;
max-height:90%;
max-width:500px;
border-radius:7px;
position:relative;
margin: 0 auto;
top:32px;
overflow-y: scroll;
 `;
export const ImageTag = styled.div`
    label{
        display:flex;
        justify-content:center;
        align-items:center;
        border: 1px solid pink;
        padding:10px 0;
        margin-bottom: 5px; 
    }
    img{
        background-clip:content-box;
        width:200px;
        height: 200px;
    }
`;  

export default MakePost;
