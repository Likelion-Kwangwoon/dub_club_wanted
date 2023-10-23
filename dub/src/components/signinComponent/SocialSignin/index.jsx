import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { socialSignin } from '../../../api/api';
import { logIn } from '../../../redux/store'

function SocialSignin () {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let authorizationCode = new URL(window.location.href).searchParams.get("code");
  
  useEffect( () => {
    const handleToken = async () => {
      try{
        console.log(authorizationCode)
        const res = await socialSignin(authorizationCode);
        if (res.code === 200) {
          dispatch(logIn(res.data.result));
          navigate("/");
          alert("로그인 성공");
        }
        else {
          alert("로그인 오류")
          navigate("/signin")
        }
      } catch (error) {
        console.error(error);
      }
    }
    if (authorizationCode) {
      handleToken()
    }
  }, [authorizationCode]);
  
  return (
    <div />
  );
}

export default SocialSignin;