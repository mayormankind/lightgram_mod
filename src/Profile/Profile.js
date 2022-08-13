import { VideoCall } from '@material-ui/icons';
import React,{useState} from 'react';
import styled from 'styled-components';
import { Layout } from '../sign/createAccount';
import Post from '../subComponent/Posts';

function Profile() {
  return (
    <Layout>
        <ProfileWrapper>
            <ImageHolder>
                <img src="images/eku.png" alt="" />
            </ImageHolder>
            <ProfileContent>
                <Header>
                    <h2>Makinde Mayowa</h2>
                    <Edit>Edit Profile</Edit>
                </Header>
                <Bio>
                    <p>I am Makinde Mayowa </p>
                    <p>I do web development and UI/UX designs </p>
                    <p>I am a web developer </p>
                    <p>I am a web developer </p>
                </Bio>
            </ProfileContent>
        </ProfileWrapper>
        <PostHolder>
            <Click>
                <VideoCall/>
                <p>POSTS</p>
            </Click>
            {/* <Post/> */}
        </PostHolder>
    </Layout>
  )
}
export const ProfileWrapper = styled.div`
    /* padding-top: 90px; */
    justify-content: center;
    width: 100%;
    max-width: 900px;
    display: flex;
    grid-gap: 100px;
    color: white; 
    border-bottom: 1px solid white;
    @media(max-width:728px){
        display: grid;
        text-align: center;
        grid-gap: 0px;
    }
`;
export const ProfileContent = styled.div`

`;
export const Click = styled.div`
    display: flex;
    grid-gap: 6px;
    color: white;
    align-items: center;
    p{
        font-size:x-small;
        font-family: cursive;
        cursor: pointer;
    }
    `;
export const ImageHolder = styled.div`
    width: 170px;
    height: 170px;
    border-radius: 50%;
    img{
        width:100%;
        height: 100%;
        border-radius: 50%;
    }
    @media(max-width:728px){
        justify-self: center;
    }
    `;
export const Bio = styled.div`
p{
    font-family: monospace;
}

`;
export const PostHolder = styled.div`

`;
export const Header = styled.div`
    display: flex;
    grid-gap: 10px;
    h2{
        font-family: cursive;
    }
`;
export const Edit = styled.button`
    border-radius: 20px;
    background-color: black;
    color: white;
    padding: 10px;
    border: 1px solid silver;
    font-weight: bold;
`;

export default Profile;