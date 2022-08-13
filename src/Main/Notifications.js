import { NotificationsNoneOutlined, Search } from '@material-ui/icons';
import React from 'react';
import NavBar from '../subComponent/NavBar';
import styled from 'styled-components';
import Post from '../subComponent/Posts';

function Notifications() {
  const Notifications=[
    {
      id:1,
      content: "Today is a new day"
    },
    {
      id:2,
      content: "EVent Alert: The youth anniversary of the church comes up this month(26th of June 2022)"
    },
    {
      id:3,
      content: "Today is Makinde Mayokun's Birthday"
    },
    {
      id:4,
      content: "Today is a new day"
    },
    {
      id:5,
      content: "EVent Alert: The youth anniversary of the church comes up this month(26th of June 2022)"
    },
    {
      id:6,
      content: "Today is Makinde Mayokun's Birthday"
    },
    {
      id:7,
      content: "Today is a new day"
    },
    {
      id:8,
      content: "EVent Alert: The youth anniversary of the church comes up this month(26th of June 2022)"
    },
    {
      id:9,
      content: "Today is Makinde Mayokun's Birthday"
    }
  ];
  return (
    <NotifLayout>
      <Notificationwrap>
        <Notificationheader>
            <h2>Notifications</h2>
        </Notificationheader>
        <NotifContent>
          {
            (Notifications.length === 0)?(
              <Nonotif>
                <NotificationsNoneOutlined style={{fontSize:'400px',fontWeight:'20',color:'rgba(0,0,0,0.1)'}}/>
                <h3>No notifiations yet</h3>
              </Nonotif>
            ):(
              Notifications.map(notification=>(
                <Notif key={notification.id}>
                  <p>{notification.content}</p>
                </Notif>
              )
            ))
          }
        </NotifContent>
      </Notificationwrap>
    </NotifLayout>
  )
}

export const NotifLayout = styled.div`
  background: lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
width: 100%;
`;
export const Notificationwrap = styled.div`
  padding: 55px 0;
  max-width: 1100px;
  width: 100%;
  overflow: hidden;
  min-height: 100vh;
`;
export const Notificationheader = styled.div`
  background: whitesmoke;
  padding: 10px 5px;
`;
export const Container = styled.div`
  
`;
export const Notif = styled.ul`
  padding: 10px 80px;
  background: white;
  p{
    font-size: large;
    font-family: cursive;
  }
`;
export const Nonotif = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const NotifContent = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 6px;
  grid-gap: 4px;
`;
export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  `;
export const Boxw = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width:100%;
  div{
    background:rgba(155,155,155,0.4);
    display:flex;
    height: 45px;
    justify-content: center;
    align-items: center;
    border-radius:20px;
    width:47%;
  }
`;

export default Notifications