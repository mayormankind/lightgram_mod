import { getAuth, signOut } from "firebase/auth";
import { Avatar, Box, Container } from "@material-ui/core";
import React, { useState } from "react";
import NavBar from "../subComponent/NavBar";
import styled from "styled-components";
import {
  Cancel,
  Flag,
  Group,
  GroupSharp,
  Home,
  Notifications,
  Settings,
  Store,
  VideoLibrary,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import GroupModal from "../Menu/GroupModal";
import FriendModal from "../Menu/FriendModal";
import { NotifLayout } from "./Notifications";

function Menu() {
  const [friendmodal, setFriend] = useState(false);
  const [groupmodal, setOpengroup] = useState(false);

  const SignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        alert('user is successfully logged out');
      })
      .catch((error) => {
        alert(error);
      });
  };
  function friendRequest(link) {
    setFriend(true);
  }
  function modalDiscard() {
    setFriend(false);
    setOpengroup(false);
  }
  function Grouplinkrequest(link) {
    setOpengroup(true);
  }
  const MenuBars = [
    {
      tabname: "Settings",
      linkPath: "/settings",
      id: 0,
      icon: <Settings />,
    },
    {
      tabname: "Home",
      linkPath: "/home",
      id: 1,
      icon: <Home />,
    },
    {
      tabname: "Library",
      linkPath: "/stories",
      id: 2,
      icon: <Store />,
    },
    {
      tabname: "Notifications",
      linkPath: "/notifications",
      id: 3,
      icon: <Notifications />,
    },
    {
      tabname: "Saved Posts",
      linkPath: "/saved",
      id: 4,
      icon: <VideoLibrary />,
    },
    {
      tabname: "Group Links",
      linkPath: "",
      id: 5,
      icon: <Group />,
      funct: Grouplinkrequest,
    },
    {
      tabname: "Invite a Friend",
      linkPath: "/friendmodal",
      id: 6,
      icon: <Group />,
      funct: friendRequest,
    },
    {
      tabname: "Logout",
      linkPath: "/",
      id: 7,
      icon: <Flag />,
      funct: SignOut
    },
  ];

  return (
    <NotifLayout>
      <MenuWrapper>
        <MenuHeader>
          <h2>Menu</h2>
        </MenuHeader>
        <MenuContent>
          <ProfileBar>
            <Avatar
              src="images/Atunu.jpg"
              style={{ backgroundClip: "content-box" }}
            />
            <UserInfo>
              <h2>Makinde Mayowa</h2>
              <Link to={"./profile"}>
                <span>View your Profile</span>
              </Link>
            </UserInfo>
          </ProfileBar>
          <ul>
            {MenuBars.map((bars) => (
              <li key={bars.id}>
                {bars.funct ? (
                  <div onClick={bars.funct}>
                    {bars.icon}
                    <span>{bars.tabname}</span>
                  </div>
                ) : (
                  <Link to={bars.linkPath}>
                    <div>
                      {bars.icon}
                      <span>{bars.tabname}</span>
                    </div>
                  </Link>
                )}
              </li>
            ))}
          </ul>
          {friendmodal ? <GroupModal onCancel={modalDiscard} /> : null}
          {groupmodal ? <FriendModal onCancel={modalDiscard} /> : null}
        </MenuContent>
      </MenuWrapper>
    </NotifLayout>
  );
}

export const MenuWrapper = styled.div`
  background: whitesmoke;
  position: relative;
  width: 100%;
  padding: 62px 0;
  max-width: 1100px;
  a {
    text-decoration: none;
    color: black;
  }
  @media (max-width: 728px) {
    padding: 52px 0;
  }
`;
export const ProfileBar = styled.div`
  display: flex;
  padding: 6px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;

export const UserInfo = styled.div`
  margin-left: 20px;
  h2 {
    font-size: medium;
    letter-spacing: 4px;
  }
  span {
    color: gray;
    font-size: 20px;
  }
`;
export const MenuContent = styled.div`
  ul {
    li {
      padding: 10px 30px;
      list-style: none;
      font-size: 20px;
      div {
        display: flex;
        align-items: center;
        height: 100%;
        padding: 10px 0;
      }
      span {
        margin-left: 10px;
      }
    }
  }
`;
export const MenuHeader = styled.div`
  color: gray;
  border-bottom: 1px solid lightgray;
  padding: 10px 30px;
  background: white;
  position: sticky;
  top: 0;
`;

export default Menu;
