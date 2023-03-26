import React, { useState, useEffect } from 'react';
import './loginPage.scss';
import axios from "axios";


function LoginPage(props) {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({});

  const accessToken = () => {
    axios ({
      url: "http://localhost:8123/accesstoken",
      method: "GET",
      withCredentials: true,
    });
  };

  const refreshToken = () => {
    axios ({
      url : "http://localhost:8123/refreshtoken",
      method: "GET",
      withCredentials: true,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }



  return (
    <div className="auth-form-container">
      <form className="login-form" onSubmit = {handleSubmit}>
        <label for="email">email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@kw.ac.kr" id="email" name="email" />
        <label for="password">password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
        <button type="submit">Log In</button>
      </form>
    <button className="link-btn" onClick={() => props.onFormSwitch('register')}>계정이 없으십니까? 회원가입하기</button>
  </div>
  )
}

export default LoginPage;

/*
export default function LoginPage({setIsLogin, setUser}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const Login = () => {
    axios({
      url: "http://localhost:8123/login",
      method: "POST",
      withCredentials: true,
      data : {
        email : email,
        password : password,
      },
    }).then((result) => {
      if(result.status === 200) {
        windiw.open("/","_self");

      }
    });
  };

  useEffect(() => {
    try {
      axios ({
        url : "http://localhost:8123/login/success",
        method : "GET",
        withCredentials : true,
      })
      .then ((result) => {
        if(result.data[0]){
          setIsLogin(true);
          setUser(result.data[0]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    } catch(error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="auth-form-container">
      <form className="login-form" onSubmit = {handleSubmit}>
        <label for="email">email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@kw.ac.kr" id="email" name="email" />
        <label for="password">password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
        <button type="submit">Log In</button>
      </form>
    <button className="link-btn" onClick={() => props.onFormSwitch('register')}>계정이 없으십니까? 회원가입하기</button>
  </div>
  )


}

*/
