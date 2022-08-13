import React from 'react';
import styled from 'styled-components';
import { Cancel } from '@material-ui/icons';

function GroupModal({onCancel}) {
  return (
    <ModalFriends>
    <InviteLink>
      <LinkHeader>
        <h2>Invite a friend</h2>
        <Cancel onClick={onCancel}/>          
      </LinkHeader>
      <InviteContent>
        https//www.lightgramapp/webversion
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
`;
export const InviteContent = styled.div`
  color:gray;
  border: 1px solid lightgray;
  padding: 10px 30px;
  background:white;
`;
export const InviteLink = styled.div`
  color:gray;
  border: 1px solid lightgray;
  padding: 30px 30px;
  background:white;
`;
export default GroupModal