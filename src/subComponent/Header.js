import React from 'react';
import Logo from './bulb3.gif';
import styled from 'styled-components';

function Header() {
  return (
    <Headerwrap>
      <Content>
        <h2>LightGram</h2>
        <img src={Logo} alt="Logo" style={{width:'60px'}} />
      </Content>
    </Headerwrap>
  )
}

export const Headerwrap=styled.div`
  display: flex;
  align-items: center;
  width: 100%; 
  flex:0.7;
  background: white;
  @media(max-width:728px) {
    padding: 10px 20px;
    justify-content: space-between;
    position:fixed;
    width:100%;
    left:0;
    top:0;
} 
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  h2{
    font-size: 25px;
  }
  @media(max-width:728px) {
    justify-content: space-between;
    width:100%;
    padding: 0 10px;
} 
`;
export default Header;