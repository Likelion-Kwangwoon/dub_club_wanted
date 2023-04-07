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

  const gotoMain = () => {
    navigate("/");
  }

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
        dispatch(logIn(response.data.result));
        navigate("/")
      });
    } catch (e) {
      console.log(e);
    }
  }
  return(
    <div className="login">
      <h1 className='dub' onClick={gotoMain}>dub</h1>
      <form onSubmit={onSubmitHandler}>
        <span className='logintext'>지금 바로 CLUB DUB에 로그인하세요</span>
        <div style={{ margin: '56px 0'}}>cd 
        <div className="inputheader">이메일</div>
        <input type="email" placeholder="ex) kwu@naver.com" className='inputform' value={Email} onChange={onEmailHandler} />
        </div>
        <div style={{ margin: '56px 0'}}>
        <div className="inputheader">비밀번호</div>
        <input type="password" placeholder="비밀번호" className='inputform' value={Password} onChange={onPasswordHandler} />
        </div>
        <div style={{ margin: '56px 0'}}>
        <button className='submitbutton' type="submit">LOGIN DUB</button>
        </div>
      </form>
    </div>
  )
}

export default LoginPage;