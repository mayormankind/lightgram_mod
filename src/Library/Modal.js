import { Box } from '@material-ui/core'
import { Cancel, CancelOutlined } from '@material-ui/icons';
import React,{useState} from 'react';
import styled from 'styled-components';

function Modal({onCancel}) {

  const [imageFile,setImage] = useState('');
    
    const ImageSelect = (obj) =>{
        const picture = obj.target.files[0];
        console.log(picture);
        if (picture === '' || picture===undefined){
            alert('oti la danu');
            return;
        }
        setImage(picture);
    }

  return (
    <BackWrap>
      <Modalcap className='modal'style={{textAlign:'center'}}>
          <Head>
            <h2>Add New Story</h2>
            <CancelOutlined onClick={onCancel} style={{color:'white'}}/>
          </Head>
          <ImageWrapper>
          {
            (imageFile)?(<Storyimage><img src={URL.createObjectURL(imageFile)}/><p>{imageFile.name}</p></Storyimage>):null
          }
          <Content className='storyInfo'>
            <input type="file" required accept='image/gif, image/jpeg, image/png' id="stimage" style={{display:'none'}} onChange={ImageSelect}/>
            <input type="text" placeholder='Title' required/>
            <input type="text" placeholder='Author' required />
            <label htmlFor="stimage">
              <p>Select Story Image</p>
            </label>
            <button onClick={onCancel}>Add Story</button>
          </Content>
        </ImageWrapper>
      </Modalcap>
    </BackWrap>
    
    )
  }
  
  export const BackWrap = styled.div`
  background:rgba(0,0,0,0.7);
  position:fixed;
  width:100%;
  height:100%;
  display:flex;
  justify-content: center;
  align-items: center;
  top:0;
  left:0;
  `;
  export const Head = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content:space-between;
    margin-bottom: 10px;
    border-bottom: 1px solid lightgray;
    padding: 0 10px;
    position: relative;
    @media(max-width:728px){
      position: unset;
    }
  `;
  export const ImageWrapper = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    position: relative;
    overflow-y: scroll;
    input,button{
      width: 100%;
    }
    @media(max-width:728px){
      display: grid;
    }
  `;
  export const Storyimage = styled.div`
    width: 200px;
    height: 250px;
    border: 1px solid white;
    margin-right: 30px;
    img{
      width: 100%;
      height: 100%;
    }
    p{
      background: #fff;
      padding: 2px;
      /* transform: translateY(-40px); */
    }
    @media(max-width:728px){     
      margin-bottom: 10px;
      display: grid;
      justify-self: center;
    }
  `;
  export const Content = styled.div`
    display: grid;
    grid-row-gap: 15px;
    flex: 2;
    width: 100%;
    label{
      p{
        font-size: medium;
        font-weight: bold;
      }
    }
    input,button{
      height: 50px;
      width: 100%;
      border: none;
      outline: none;
    }
  input{
    padding: 0 20px;
  }
  `;
  export const Modalcap = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 50%;
    max-width:700px;
    box-shadow:2px 2px 0 2px gray;
    background: rgba(155,155,155,0.7);
    animation: add .2s ease-in;
    padding: 10px;
    button:hover {
      transition: .3s ease-in;
      background: #c93049;
      color: white;
  }
    @media(max-width:728px){
      flex-direction: column;
    button {
    background: #963848;
    color: white;
    border-radius: 20px;
  }
}
  @keyframes add {
      from{
          opacity: 0;
      }
      to{
          opacity: 1;
      }
  }
  `;
  
export default Modal;