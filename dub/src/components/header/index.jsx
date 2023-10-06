import React from 'react';
import * as S from './style';
import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { logOut } from '../../redux/store';
import dub_logo from '../../assets/logo_dub.svg';
function Header() {
  const navigate = useNavigate();
//  const dispatch = useDispatch();

  // const token = useSelector((state) => state.token.token);

  const gotoMain = () => {
    navigate("/");
  }
  const gotoSignin = () => {
    navigate("/signin");
  }
  // const gotoGrid = () => {
  //   navigate("/gridpage");
  // }
  // const gotoMyPage = () => {
  //   navigate("/mypage");
  // }
  return (
    <S.HeadWrapper>
      <S.NavWrapper>
        <S.NavUl>
          <S.LogoWrapper onclick={gotoMain}>
            <S.DUBLogo src={dub_logo} alt="" />
          </S.LogoWrapper>
          <S.NavTale onclick={gotoSignin} >
            로그인
          </S.NavTale>
        </S.NavUl>
      </S.NavWrapper>
    </S.HeadWrapper>
  );
}

export default Header;