import React from 'react';
import * as S from './style';
import dubLogo from '../../../assets/logo_dub.svg';
import { signin } from '../../../api/api';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logIn } from '../../../redux/store';

function ClubSignup () {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = async(data) => {
    console.log(data);
    try{
      const res = await signin(data);
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
  const gotoSignup = () => {
    navigate("/signin/clubSignup");
  }
  return(
    <S.ClubSigninWrapper>
      <S.TitleLogo src={dubLogo} alt="" />
      <S.SigninForm onSubmit={handleSubmit(onSubmit)} id='signin'>
        <S.InputDIV>
          <S.InputLabel htmlFor='email'>
            <span>동아리 이메일</span>
          </S.InputLabel>
          <S.InputSpace
          id="email"
          placeholder="이메일을 입력하세요." 
          {...register('email')}/>
        </S.InputDIV>
        <S.InputDIV>
          <S.InputLabel htmlFor='password'>
              <span>비밀번호</span>
          </S.InputLabel>
          <S.InputSpace
          id="password"
          type="password"
          placeholder="비밀번호를 입력하세요." 
          {...register('password')}/>
        </S.InputDIV>
      </S.SigninForm>
      <S.ClubSigninButton type="submit" id='signin' onClick={handleSubmit(onSubmit)}>
          <p>동아리 로그인</p>
        </S.ClubSigninButton>
      <S.ClubSigninButton onClick={gotoSignup}>
        <p>동아리 회원가입</p>
      </S.ClubSigninButton>
    </S.ClubSigninWrapper>
  )
}

export default ClubSignup;