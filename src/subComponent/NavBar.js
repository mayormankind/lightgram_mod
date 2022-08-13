import { AmpStories, AmpStoriesOutlined, Chat, ChatOutlined, Home, HomeOutlined, Menu, MenuOutlined, Notifications,NotificationsOutlined, SportsEsports, SportsEsportsOutlined } from '@material-ui/icons';
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function NavBar({click,navAct}) {
    const navs = [
        {
            tabname: 'Home',
            path:'/home',
            id: 1,
            filled: <Home/>,
            outline: <HomeOutlined/>
        },
        {
            tabname: 'Notifications',
            path:'/notifications',
            id: 2,
            filled: <Notifications/>,
            outline: <NotificationsOutlined/>
        },
        {
            tabname: 'Stories',
            path:'/stories',
            id: 3,
            filled: <AmpStories/>,
            outline: <AmpStoriesOutlined/>
        },
        {
            tabname: 'Games',
            path:'/ggg',
            id: 4,
            filled: <SportsEsports/>,
            outline: <SportsEsportsOutlined/>
        },
        {
            tabname: 'Menu',
            path:'/menu',
            id: 5,
            filled: <Menu/>,
            outline: <MenuOutlined/>
        }
  
    ];
  return (
      <Nav>
          <Ul>
              {
                  navs.map(nav=>(
                      <Link to={nav.path} key={nav.id} onClick={navAct}>
                          {
                            nav.tabname === click ? nav.filled : nav.outline}
                            <span>{nav.tabname}</span>
                      </Link>
                  ))
              }
          </Ul>
      </Nav>
  )
}
export const Nav = styled.nav`
background: white;
position: fixed;
left: 0;
bottom: 50%;
transform: translate(40%,55%);
border-radius: 10px;
height: 85%;
padding: 5px;
border: 2px solid rgb(22, 85, 179);
@media(max-width:728px) {
    position:fixed;
    border-radius: 0;
    border: none;
    bottom:0;
    width:100%;
    height: initial;
    transform: translate(0,0);
    left:0;
}
`;

export const Ul = styled.ul`
    display: grid;
    list-style: none;
    justify-items: self-end;
    grid-row-gap: 57px;
    a{
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 64px;
        text-decoration: none;
        span{
            color: gray;
            font-size: small;
            &:hover{
                color: black;
            }
        }
        .MuiSvgIcon-root{
            font-size: 40px;
            color: black;
        }

    }
    @media(max-width:728px){
        display: flex;
        justify-content: space-between;
        width:100%;
        background: #fff;
        .MuiSvgIcon-root{
            font-size: 30px;
        }
    }
`;

export default NavBar;
