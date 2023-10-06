import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { socialSignin } from '../../../api/api';
import { logIn } from '../../../redux/store'

function SocialSignin () {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [token, setToken] = useState("");

  
  const handleToken = async () => {
    let authorizationCode = new URL(window.location.href).searchParams.get("code");
    console.log(authorizationCode)
    const res = await socialSignin(authorizationCode);
    console.log(res)
  }
  useEffect( () => {
    handleToken()
    if (token !== "" ) {
      dispatch(logIn(token));
      navigate("/")
    }
    else {
      alert("로그인 오류")
      navigate("/signin")
    }
  }, []);
  
  return (
    <div />
  );
}

export default SocialSignin;