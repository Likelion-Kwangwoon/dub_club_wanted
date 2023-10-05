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

  let authorizationCode = new URL(window.location.href).searchParams.get("code");
  const handleToken = async (authorizationCode) => {
    const res = await socialSignin(authorizationCode);

    res && setToken(res)
  }
  useEffect( () => {
    handleToken(authorizationCode)
    dispatch(logIn(`Bearer ${token}`));
    navigate("/")
  }, [dispatch, navigate, authorizationCode, token]);
  
  return (
    <div />
  );
}

export default SocialSignin;