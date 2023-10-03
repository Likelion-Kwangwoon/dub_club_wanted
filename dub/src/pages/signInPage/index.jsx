import React from 'react';
import kakaoLogo from '../../assets/kakao_login.png';
import logo from '../../assets/logo_dub.svg';
import SigninSelector from '../../components/signinComponent/SigninSelector';
import * as S from './style';

function SigninPage() {
  return (
    <S.PageWrapper>
      <S.SigninWrapper>
        <SigninSelector />
      </S.SigninWrapper>
    </S.PageWrapper>
  );
}

export default SigninPage;