import React from 'react';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
// import LoginUser from '../../redux/_actions/action';
import './loginPage.scss';
import { url } from '../../Url';
import { logIn } from '../../redux/store';

function LoginPage() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onEmailHandler = (event) => {
      setEmail(event.currentTarget.value);
  }
  const onPasswordHandler = (event) => {
      setPassword(event.currentTarget.value);
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault();   
    console.log('Eamil', Email);
    console.log('Password', Password);
    let body = {
      email: Email,
      password: Password
    }
    try{
      await axios.post(
        `${url}/app/member/sign-in`,
        body
      ).then(response => {
        console.log(response.data.result)
        dispatch(logIn(response.data.result));
        navigate("/")
      });
    } catch (e) {
      console.log(e);
    }
  }
  return(
    <div>
      <h1>로그인 페이지</h1>
      <form style={{display: 'flex', flexDirection: 'column'}}
        onSubmit={onSubmitHandler}>
        <label>Email</label>
        <input type="email" value={Email} onChange={onEmailHandler} />
        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordHandler} />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginPage;