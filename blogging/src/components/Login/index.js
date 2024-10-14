import React from 'react';
import LoginPage, { Reset,Input, Logo, Password, Footer,Submit, Username } from '@react-login-page/page7';
import LoginLogo from 'react-login-page/logo-rect';
import {Link} from '@mui/material/';
import Header from "../Header/";
import FooterOfPage from "../Footer/";






const Login = () =>{


  return (
  <>
  <Header />
  <LoginPage style={{ height: "100vh",width : "100vw" }}>
    <Logo>
      <LoginLogo />
    </Logo>
    <Username visible={false} />
    <Input type='email' id='email' name="email" index={0} placeholder="email" value={"email"} onChange={Submit}/>
    <Password id="password" name="password" value={"password"} onChange={Submit} />
    <Submit onClick={()=>{}} />
    <Footer>
      Not a member? <Link underline="hover" href="/register">Sign up now</Link>
    </Footer>
  </LoginPage>
  <FooterOfPage />
  </>
);
}
export default Login;