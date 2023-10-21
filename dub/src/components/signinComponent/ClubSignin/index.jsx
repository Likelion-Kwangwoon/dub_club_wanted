import React from 'react';
import * as S from './style';
import dubLogo from '../../../assets/logo_dub.svg';
import { useForm } from 'react-hook-form';

function ClubSignin () {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
  return(
    <S.ClubSigninWrapper>
      <S.TitleLogo src={dubLogo} alt="" />
      <S.SigninForm onSubmit={handleSubmit(onSubmit)}>
        <S.InputDIV>
          <S.InputLabel
          for="itemID">
            <span>아이디</span>
          </S.InputLabel>
          <S.InputSpace
          id="itemID"
          placeholder="이메일을 입력하세요." />
        </S.InputDIV>
        <S.InputDIV>
          <S.InputLabel
            for="itemPW">
              <span>비밀번호</span>
          </S.InputLabel>
          <S.InputSpace
          id="itemPW"
          placeholder="비밀번호를 입력하세요." />
        </S.InputDIV>
        <S.ClubSigninButton >
          <p>동아리 로그인</p>
        </S.ClubSigninButton>
      </S.SigninForm>
      <S.ClubSigninButton >
        <p>동아리 회원가입</p>
      </S.ClubSigninButton>
    </S.ClubSigninWrapper>
  )
}

export default ClubSignin;