import React from 'react';
import styled from 'styled-components';
import {auth , provider } from './firebase';

function Login({Setuser}) {
    const signIn=()=>{
        auth.signInWithPopup(provider).then((result) =>{
            let user = result.user;
            let Newuser = {
                name: user.displayName, 
                email: user.email
            }
            Setuser(Newuser);
        }).catch((error)=>{
            alert(error.message);
        })
    }
    return (
        <Container>
            <Content>
                <AmazonLogo src ="data:image/png;base64,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" alt="Logo" />
                <h1>Login to FlyBuy </h1>
                <LoginButtton onClick={signIn}>Sign in via Google</LoginButtton>
            </Content>
        </Container>
    )
}
//bg-color: black;
export default Login
 const Container = styled.div`
    width:100%;
    height: 100vh;
    display: grid;
    background-image: url("https://www.vauman.com/en/images/e-commerce-wechat-banner.jpg");
    place-items: center;
 `
const AmazonLogo = styled.img`
    height:100px;
    margin-bottom:30px;
`//bgcolor#f0c14b
//border#a88734
const LoginButtton = styled.button`
    margin-top: 20px;
    background-color:black ;
    border-radius:5px;
    color:white;
    cursor:pointer;
    height: 60px;
    border:2px solid black;
    padding: 4px 8px;

`
const Content = styled.div`
    padding:100px;
    background-color:white;
    margin-right:850px;
    border-radius: 5px;
    box-shadow: 0 1px 3px white;
    text-align: center;
    h1{
        font-size:30px;
        margin-right:15px;
    }
`
