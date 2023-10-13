import React from 'react';
import { KAKAO_AUTH_URL } from '../../../SocialOAuth';
import * as S from './style';
import kakaoLogin from '../../../assets/kakao_login.png';
import dubLogo from '../../../assets/logo_dub.svg';

function SigninSelector () {

  const handleSocialSignin = () => {
    window.location.href = KAKAO_AUTH_URL;
  }
  return(
    <S.SelectorWrapper>
      <S.TitleLogo src={dubLogo} alt="" />
      <S.KakaoButton onClick={handleSocialSignin}>
        <img src={kakaoLogin} alt='' />
      </S.KakaoButton>
      <S.ClubSigninButton>
        <p>동아리 로그인</p>
      </S.ClubSigninButton>
    </S.SelectorWrapper>
  );
}

export default SigninSelector;