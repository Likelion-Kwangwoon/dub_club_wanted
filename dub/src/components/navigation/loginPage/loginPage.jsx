import React, { useState } from 'react';
import './loginPage.scss';




function LoginPage(props) {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

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
