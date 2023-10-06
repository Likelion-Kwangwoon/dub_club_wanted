import React from 'react';
import * as S from './style';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/store';
import dub_logo from '../../assets/logo_dub.svg';
function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = useSelector((state) => state.token.token);

  const gotoMain = () => {
    navigate("/");
  }
  const gotoSignin = () => {
    navigate("/signin");
  }
  const gotoGrid = () => {
    navigate("/gridpage");
  }
  const gotoMyPage = () => {
    navigate("/mypage");
  }
  return (
    <header>
      <div onclick={gotoMain}>
        <img src={dub_logo} alt="" />
      </div>
      <div onclick={gotoSignin} >
        <p>로그인</p>
      </div>
    </header>
  )
}

export default Header;