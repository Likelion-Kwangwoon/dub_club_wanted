import React, { useState } from 'react';
import './RegisterPage.scss';



function RegisterPage(props) {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name);
        console.log(email);
        console.log(pass);
      }
 
    return(
    <div className="auth-form-container">
      <form className="register-form"onSubmit = {handleSubmit}>
      <label htmlFor="name">Full name</label>
      <input value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder="Fullname" id="name" name="name" />
      <label htmlFor="email">email</label>
      <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@kw.ac.kr" id="email" name="email" />
      <label for="password">password</label>
      <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
      <button type="submit">Register</button>
    </form>
    <button className="link-btn" onClick={() => props.onFormSwitch('login')}>이미 계정이 있으십니까? 로그인 하기</button>
    </div>
    )
  }

  export default RegisterPage;
  
