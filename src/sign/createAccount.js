import { EmailOutlined, Facebook, LockOpenOutlined, LockOutlined, Mail, VerifiedUserOutlined } from '@material-ui/icons';
import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SigninWrap,Signin,Ortag,Button,Formcontent,Logo, Backver } from './SignIn';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../firebase';

function CreateAccount() {
    const passInput = document.querySelector('#password');
    const [isPassword,setisPassword] = useState(true);
    const [ptype,setType] = useState('password');
    const [biodata,setBiodata] = useState(false);

const auth = getAuth(app);
const [email,setEmail] = useState('');
const [password,setPassword] = useState('');
const [UserName,setUserName] = useState('');
const SignUp = () =>{
    createUserWithEmailAndPassword(auth, email, password, UserName)
      .then((userCredential) => {
        const user = userCredential.user;
        user.displayName = UserName;
        const name_user = user.displayName;
        alert(`Account ${name_user} successfully created`);
      })
      .catch((error) => {
        const errorCode = error.code;
        alert(errorCode);
    });
}
  function userdata(){
    setBiodata(true);
  }
  function back(){
   setBiodata(false);     
  }
    function showPassword() {
        setisPassword(false);
        setType('text');
        if(ptype==='password'){passInput.type='text'}
    }
    function hidePassword(){
        setisPassword(true);
        setType('password');
        if(ptype==='text'){passInput.type='password'}
    }
  return (
    <Layout>
      <SigninWrap style={{maxWidth:'900px'}}>
        <Mobilevers>
            <Google>
                <Button>
                    <Mail style={{marginRight:'10px'}}/>Signup with Google
                </Button>
                <Button>
                    <Facebook style={{marginRight:'10px'}}/>Signup with Facebook
                </Button>
            </Google>
            <Ortag>Or</Ortag>
            <Form>
                <Formcontent>
                  <input type="text" placeholder='Username' onChange={(e)=>setUserName(e.target.value)}/>
                    <VerifiedUserOutlined/>
                </Formcontent>  
                <Formcontent>
                    <input type="text" placeholder='Email' onChange={(e)=> setEmail(e.target.value)}/>
                    <EmailOutlined/>
                </Formcontent>
                <Formcontent>
                    <input type="password" placeholder='Password' name="" id="password" onChange={(e)=> setPassword(e.target.value)}/>
                    {(isPassword)?<LockOutlined onClick={showPassword}/>:<LockOpenOutlined onClick={hidePassword}/>}
                </Formcontent>        
                <Signin onClick={SignUp}>Sign Up</Signin>
                <p>Have an account? <Link to='/'><span>Sign In</span></Link></p>
            </Form>
        </Mobilevers>
        <Deskvers>
            <Backver>
                <Logo>
                    <h2>Lightgram</h2>
                </Logo>
                <Textcontent>
                    <h2>Hello There! Guess you are new here?</h2>
                    <Link to='/'><h3>Sign in to continue to account</h3></Link>
                </Textcontent>
            </Backver>
        </Deskvers>
      </SigninWrap>
    </Layout>

  )
}

export const Layout=styled.div`
  display: flex;
  width:100%;
  justify-content: center;
flex-direction:column;
align-items: center;
height:100vh;
`;

export const Deskvers = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  box-shadow: 1px 1px 7px rgba(0,0,0,0.7);
  position: relative;
  background: url('/images/1.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background-position: center;
    @media(max-width:600px){
        display: none;
    }
`;
    export const Form = styled.div`
    padding: 10px 0;
    display: grid;
    grid-row-gap: 15px;
    `;
    export const Textcontent = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
    height: 100%;
    text-align: center;
    h2{
        margin-bottom: 20px;
    }
    h3{
        color: lightgray;
        text-decoration-thickness: 2px;
        text-decoration-line: underline;
        text-decoration-color: rgb(18, 128, 128);
    }
    `;
    export const Google = styled.div`
    display: grid;
    grid-row-gap: 30px;
    padding: 10px 0;
    `;
export const Mobilevers = styled.div`
background: rgba(161, 231, 192, 0.2);
padding: 20px 60px;
text-align: center;
border-top-left-radius: 10px;
border-bottom-left-radius: 10px;
display: flex;
flex-direction: column;
justify-content: center;
width: 50%;
box-shadow: 1px 1px 4px rgba(0,0,0,0.7);
@media(max-width:728px){
    padding: 20px 15px;
}
@media(max-width:600px){
    width: 100%;
    padding: 20px 20px;
}
`;

export default CreateAccount;