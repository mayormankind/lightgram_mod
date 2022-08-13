import styled from 'styled-components';
import { Box } from '@material-ui/core';
import { NoteAddOutlined,LibraryAddOutlined, SearchOutlined } from '@material-ui/icons';
import React, {useState} from 'react';
import LibraryStories from '../Library/LibraryStories';
// import LibraryWriteUps from '../Library/LibraryWriteUps';
import Modal from '../Library/Modal';
import BackColor from '../Library/BackColor';
import Header from '../subComponent/Header';

function Library() {
    const [modal,setModal] = useState(false);
    function addNew(){
        setModal(true);
    }
    function modalDiscard(){
      setModal(false);
    }
  return (
      <LibraryWrapper>
        <HeaderLib>
          <SubHeader>
            <Header/>
            <Search>
              <input type="text" placeholder='Search by title or author' name="" id="" />
              <SearchOutlined style={{marginRight:'9px'}}/>
            </Search>
          </SubHeader>
        </HeaderLib>
        <Wrap>
            <LibraryContent>
              <Box style={{display:'flex', margin:'5px 0',alignItems:'center',gridGap:'90px'}}>
                  <h3 style={{color:'gray', fontSize:'22px', letterSpacing:'4px',paddingLeft:'20px'}}>Available Stories</h3>
                  <LibraryAddOutlined onClick={addNew}/>
              </Box>
              <StoriesWrap>
                <LibraryStories/>
              </StoriesWrap>
            </LibraryContent>
            {modal ? <Modal onCancel={modalDiscard}/> : null}
            {/* <Box className='LibraryStories'>
              <Box style={{display:'flex', justifyContent:'space-between'}}>
                  <h3>Other WriteUps</h3>
                  <NoteAddOutlined onClick={addNew}/>
              </Box>
              <LibraryWriteUps/>
            </Box>  */}
          </Wrap>
        </LibraryWrapper>
      
    )
}

export const StoriesWrap = styled.div`
ul{
  display: -ms-grid;
  display: grid;
  background: rgba(255, 255, 255, 0.5);
  grid-row-gap: 14px;
  grid-column-gap: 10px;
  padding: 5px 10px 10px 10px;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
}
`;
export const StoryCard = styled.div`
  margin-bottom: 10px;
  div{
    box-shadow: 0px 10px 10px -7px #8a8888;
    img{
      width: 100%;
      height: 250px;
      max-height: 700px;
    }
  }
`;
export const Wrap = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`;
export const LibraryContent = styled.div`
width: 100%;
max-width: 1100px;
`;
export const HeaderLib = styled.div`
display: flex;
justify-content:  center;
align-items: center;
height: 80px;
width: 100%;
background: rgba(155,155,155,0.7);
position: sticky;
top: 0;
`;
export const SubHeader = styled.div`
width: 100%;
max-width: 1100px;
position: sticky;
top: 0;
display: flex;
align-items: center;
justify-content: space-between;
/* background: #000; */
@media(max-width:728px){
  flex-direction: column;
}
`;
export const Search = styled.div`
background: white;
display: flex;
align-items: center;
border: 1px solid blue;
border-radius: 9px;
height: 50px;
input{
  padding: 0 10px;
  width: 300px;
  border: none;
  outline: none;
}
@media(max-width:728px){
  transform: translateX(0);
  transform: translateY(-6px);
}
`;
export const LibraryWrapper = styled.div`
  width: 100%;
  justify-content: center;
  background: #fff;
  height: 100%;
  /* input,button{
    height: 40px;
  width: 100%;
  padding: 0 10px;
  border: none;
  margin-bottom: 10px;
  } */
@media(max-width:728px){
}
`;

export default Library;