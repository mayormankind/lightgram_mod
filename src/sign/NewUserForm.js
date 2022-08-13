import React,{useState} from 'react';
import {Layout} from './createAccount';
import styled from 'styled-components';
import { Cancel, CancelOutlined, CancelPresentation, CancelScheduleSend, CancelSharp, PhotoAlbum } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';


function NewUserForm() {
  const [imageFile,setImage] = useState('');
    
  const ImageSelect = (obj) =>{
      const picture = obj.target.files[0];
      if (picture === '' || picture===undefined){
          alert('oti la danu');
          return;
      }
      setImage(picture);
  }
  return (
    <Layout>
        <FormContent>
            <Header>
                <h2>User Biodata</h2>
            </Header>
            <FormWrapper>
                <PhotoBox>
                  <input type="file" name="" id="userphoto" onChange={ImageSelect}/>
                  <label htmlFor="userphoto">
                {
                  (imageFile)?(<img src={URL.createObjectURL(imageFile)}/>):(
                    <div>
                      <PhotoAlbum style={{color:'lightgray',fontSize:'200px'}}/>
                      <p>Upload a photograph</p>
                    </div>
                  )
                }
                  </label>
                </PhotoBox>
              <Form>
                <input type="text" name="" placeholder='Surname' id="" />
                <input type="text" name="" placeholder='Name' id="" />
                <input type="text" name="" placeholder='Phone Number' id="" />
                <input type="email" name="" id="" placeholder='Email Address'/>
                <Flex>
                  <DOB>
                    D.O.B
                    <input type="date" name="" id="" style={{border: 'none',outline:'none'}}/>
                  </DOB>
                  <Gendertag>
                    Gender:
                    <select name="" id="">
                      <option value="Male">MALE</option>
                      <option value="Female">FEMALE</option>
                    </select>
                  </Gendertag>
                </Flex>
                <button disabled="disabled">Save Biodata</button>
              </Form>
            </FormWrapper>
        </FormContent>
    </Layout>
  )
}
export const FormContent=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 600px;
  padding: 10px;
  width: 100%;
  background: rgba(155,155,155,0.9);
  border: 1px solid #963848;
  @media(max-width:728px){
    grid-gap: 5px;
    max-height: 400px;
    height: 100%;
  }
  `;
export const Header=styled.div`
  padding: 0 20px;
  border-bottom: 1px solid #963848;
  `;
export const PhotoBox=styled.div`
  text-align: center;
  font-weight: bold;
  font-size: small;
  border: 1px solid white;
  height: 80%;
  display: grid;
  width: 100%;
  place-content: center;
  justify-self: center;
  input{
    display: none;
  }
  img{
    width: 100%;
    height: 100%;
  }
  @media(max-width:728px){
    height: 100%;
    width: 60%;
  }
  `;
export const Flex=styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-gap: 30px;
  `;
export const FormWrapper=styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media(max-width:728px){
    display: grid;
    overflow-y: scroll;
    grid-gap: 10px;
  }
`;
export const Gendertag=styled.div`
  background: #fff;
  height: 45px;
  width: 50%;
  padding: 0 10px;
display: flex;
align-items: center;
color: gray;
font-size: smaller;
/* grid-gap: 20px; */
justify-content: space-between;
select{
  border: none;
  outline: none;
}
`;
export const DOB=styled.div`
background: #fff;
padding: 0 10px;
display: flex;
align-items: center;
justify-content: space-between;
width: 50%;
color: gray;
font-size: smaller;
`;
export const Form=styled.form`
  display: grid;
  grid-gap: 10px;
  padding: 20px;
  input,button{
    height: 45px;
    padding: 0 10px;
    font-family: monospace;
    outline: blue;
    border: none;
  }
  button{
    border-radius: 10px;
    color: black;
    font-weight: bold;
    &:hover{
      background: #963848;
      color: white;
      border: 1px solid white;
      transition: .5s ease-out;
    }
  }
  @media(max-width:728px){
    padding: 5px;
  }
`;

export default NewUserForm;