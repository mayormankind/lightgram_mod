import {
  Chat,
  Facebook,
  LockOpenOutlined,
  LockOutlined,
  Mail,
  MailOutlined,
  MailRounded,
} from "@material-ui/icons";
import React from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { Layout, Textcontent, Google, Form } from "./createAccount";
import { getAuth,signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase';


function SignIn() {
  const passInput = document.querySelector(".password");
  const [isPassword, setisPassword] = useState(true);
  const [ptype, setType] = useState("password");
  const history = useHistory();

  const auth = getAuth(app);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [UserName, setUserName] = useState("");

  const CheckSignIn = (app) => {
    signInWithEmailAndPassword(auth, Email, Password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert(`successful login`);
        history.push('/home');
      })
      .catch((error) => {
        const errorCode = error.code;
        alert(errorCode)
      });
  };

  function showPassword() {
    setisPassword(false);
    setType("text");
    if (ptype == "password") {
      passInput.type = "text";
    }
  }
  function hidePassword() {
    setisPassword(true);
    setType("password");
    if (ptype == "text") {
      passInput.type = "password";
    }
  }
  return (
    <Layout>
      <SigninWrap style={{ maxWidth: "900px" }}>
        <Deskvers>
          <Backver>
            <Logo>
              <h2>Lightgram</h2>
            </Logo>
            <Textcontent>
              <h2>Welcome back to the Believer's Community</h2>
              <Link to="/signup">
                <h3>Sign in to continue to account</h3>
              </Link>
            </Textcontent>
          </Backver>
        </Deskvers>
        <Mobilevers>
          <Google>
            <Button>
              <Mail style={{ marginRight: "10px" }} />
              Continue with Google
            </Button>
            <Button>
              <Facebook style={{ marginRight: "10px" }} />
              Continue with Facebook
            </Button>
          </Google>
          <Ortag>Or</Ortag>
          <Form>
            <Formcontent>
              <input
                type="text"
                placeholder="Username or Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <MailOutlined />
            </Formcontent>
            <Formcontent>
              <input
                type="password"
                placeholder="Password"
                className="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {isPassword ? (
                <LockOutlined onClick={showPassword} />
              ) : (
                <LockOpenOutlined onClick={hidePassword} />
              )}
            </Formcontent>
            <span style={{ textAlign: "right", marginBottom: "10px" }}>
              Forgot Password?
            </span>
              <Signin onClick={CheckSignIn}>Sign In</Signin>
            <p>
              No account yet?{" "}
              <Link to="/signup">
                <span>Sign Up</span>
              </Link>
            </p>
          </Form>
        </Mobilevers>
      </SigninWrap>
    </Layout>
  );
}
export const Deskvers = styled.div`
  width: 50%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  box-shadow: 1px 1px 7px rgba(0, 0, 0, 0.7);
  background: url("/images/1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  background-position: center;
  @media (max-width: 600px) {
    display: none;
  }
`;
export const Button = styled.button`
  font-size: small;
  height: 50px;
  width: 100%;
  background: white;
  border-radius: 30px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  color: rgb(18, 128, 128);
  font-weight: bold;
`;
export const Backver = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  color: white;
  background: rgba(0, 0, 0, 0.7);
`;
export const Logo = styled.div`
  padding: 10px 20px;
  h2 {
    text-align: left;
  }
`;
export const Formcontent = styled.div`
  background: white;
  display: flex;
  align-items: center;
  border-radius: 30px;
  padding: 0 10px;
  input {
    border-radius: 30px;
    width: 100%;
    height: 50px;
    margin-right: 10px;
    border: none;
    outline: none;
    padding: 0 20px;
  }
  .MuiSvgIcon-root {
    color: gray;
  }
`;
export const Signin = styled.button`
  border: none;
  font-size: small;
  height: 50px;
  width: 100%;
  border-radius: 30px;
  background: rgb(17, 63, 63);
  color: white;
  text-transform: capitalize;
  font-weight: bold;
`;
export const Mobilevers = styled.div`
  background: rgba(161, 231, 192, 0.2);
  padding: 20px 60px;
  text-align: center;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);
  @media (max-width: 728px) {
    padding: 20px 40px;
  }
  @media (max-width: 600px) {
    width: 100%;
    padding: 20px 20px;
  }
`;

export const SigninWrap = styled.div`
  display: flex;
  width: 100%;
  border-radius: 10px;
  height: 100%;
  padding: 20px 0;
  p {
    color: rgb(170, 170, 170);
  }
  span {
    text-transform: capitalize;
    color: rgb(18, 128, 128);
    font-weight: bold;
  }
`;

export const Ortag = styled.p`
  position: relative;
  &::before {
    content: "";
    position: absolute;
    border: 1px solid rgba(155, 155, 155, 0.8);
    top: 10px;
    left: 0;
    width: 40%;
  }
  &::after {
    content: "";
    position: absolute;
    border: 1px solid rgba(155, 155, 155, 0.8);
    top: 10px;
    right: 0;
    width: 40%;
  }
`;

export default SignIn;
