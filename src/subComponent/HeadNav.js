import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import NavBar from './NavBar';

function HeadNav({click}) {
  return (
      <HeaderNavwrap>
        <Content>
          <Header/>
          <NavBar click={click}/>
        </Content>
      </HeaderNavwrap>
  )
}
export const HeaderNavwrap=styled.div`
background: white;
position:fixed;
top: 0;
width:100%;
display:flex;
justify-content:center;
padding: 5px 0;
z-index: 1;
@media(max-width:728px) {
  flex-direction:column;
}
@keyframes nav {
  0%{
    transform: translateY(-20%);
  }
  50%{
    transform: translateY(0);
  }
  100%{
    transform: translateY(20%);
  }
}
`;

export const Content=styled.div`
display:flex;
width:100%;
max-width: 1128px;
flex-direction: column;
position: relative;
`;
export default HeadNav;