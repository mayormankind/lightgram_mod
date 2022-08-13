import React from 'react';
import styled from 'styled-components';
import { Cancel, Facebook, WhatsApp } from '@material-ui/icons';


function FriendModal({onCancel}) {
  return (
    <ModalFriends>
    <InviteLink>
      <LinkHeader>
        <h2>Media group links</h2>
        <Cancel onClick={onCancel} style={{marginLeft:'100px'}}/>          
      </LinkHeader>
      <InviteContent>
      <a href='https://whatsapp.com'><Medialist>
              <WhatsApp style={{color:'green'}}/>
              Whatsapp
          </Medialist></a>
      <a href='https://www.facebook.com/profile.php?id=100081687606178'><Medialist>
              <Facebook style={{color:'blue'}}/>
              Facebook Page
          </Medialist></a>
      </InviteContent>
    </InviteLink>
  </ModalFriends>
  )
}
export const ModalFriends = styled.div`
  position: fixed;
  display: grid;
  place-content: center;
  top: 0;
  left:0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.6)
`;
export const LinkHeader = styled.div`
  color:gray;
  display:flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  border-bottom: 1px solid rgba(0,0,0,0.3);
  @media(max-width:728px){
    h2{
      font-size: 20px;
    }
  }
`;
export const InviteContent = styled.div`
display: flex;
background:white;
justify-content: space-between;
padding: 20px 20px;
`;
export const InviteLink = styled.div`
  color:gray;
  border: 1px solid lightgray;
  padding: 10px 20px;
  background:white;
  width: 400px;
  `;
  export const Medialist = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  .MuiSvgIcon-root{
    border-radius: 50%;
    font-size: 50px;
    &:hover{
      transition: 80ms;
      box-shadow: 3px 3px 10px rgba(0,0,0,0.2);
    }
}
`;
export default FriendModal;