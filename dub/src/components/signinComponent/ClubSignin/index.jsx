import React from 'react';
import * as S from './style';
import dubLogo from '../../../assets/logo_dub.svg';

function ClubSignin () {
  return(
    <S.ClubSigninWrapper>
      <S.TitleLogo src={dubLogo} alt="" />
      <S.ClubSigninButton >
        <p>동아리 로그인</p>
      </S.ClubSigninButton>
    </S.ClubSigninWrapper>
  )
}

export default ClubSignin;