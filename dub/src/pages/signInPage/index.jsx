import React from 'react';
import SigninSelector from '../../components/signinComponent/SigninSelector';
import * as S from './style';
import { Routes, Route } from 'react-router-dom';
import ClubSignin from '../../components/signinComponent/ClubSignin';
import ClubSignup from '../../components/signinComponent/ClubSingnup';

function SigninPage() {
  return (
      <S.PageWrapper>
        <S.SigninWrapper>
          <Routes>
            <Route exact path='' element={<SigninSelector />} />
            <Route path='clubSignin' element={<ClubSignin />} />
            <Route path='clubSignup' element={<ClubSignup />} />
          </Routes>
        </S.SigninWrapper>
      </S.PageWrapper>
  );
}

export default SigninPage;