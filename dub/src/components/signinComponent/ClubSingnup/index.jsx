import React from 'react';
import * as S from './style';
import dubLogo from '../../../assets/logo_dub.svg';
import { signin } from '../../../api/api';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { logIn } from '../../../redux/store';
function ClubSignup () {
  const navigate = useNavigate();
  const onSubmit = async(data) => {
    console.log(data);
    try{
      const res = await signin(data);
      if (res.code === 200) {
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
  const gotoSignin = () => {
    navigate("/signin/clubSignin");
  }
  const formSchema = yup.object().shape({
    email: yup
      .string()
      .required('이메일을 입력해주세요')
      .email('이메일 형식이 아닙니다.'),
    password: yup
      .string()
      .required('영문, 숫자포함 8자리를 입력해주세요.')
      .min(8, '최소 8자 이상 가능합니다')
      .max(15, '최대 15자 까지만 가능합니다')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/,
        '영문 숫자포함 8자리를 입력해주세요.'
      ),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref('password')], '비밀번호가 다릅니다.'),
    groupName: yup
      .string()
      .required('동아리 분류를 선택해주세요.'),
    name: yup
        .string()
        .required('이름을 입력해주세요.'),
    category: yup
        .string()
        .required('동아리 분류를 입력해주세요.'),
    introduction: yup
        .string()
        .required('내용을 입력해주세요.'),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(formSchema),
  });

  return(
    <S.ClubSignupWrapper>
      <S.HeadDiv>
        <S.CancelBtn>취소</S.CancelBtn>
        <S.TitleText>회원가입</S.TitleText>
      </S.HeadDiv>
      <S.SignupForm onSubmit={handleSubmit(onSubmit)} id='signin'>
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
        <S.InputDIV>
          <S.InputLabel htmlFor='name'>
              <span>단체명</span>
          </S.InputLabel>
          <S.InputSpace
          id="name"
          type="name"
          placeholder="단체명을 입력하세요." 
          {...register('name')}/>
        </S.InputDIV>
        <S.InputDIV>
          <S.InputLabel htmlFor='groupName'>
              <span>동아리 구분</span>
          </S.InputLabel>
          <S.InputSpace
          id="groupName"
          type="groupName"
          placeholder="선택지 만들기" 
          {...register('groupName')}/>
        </S.InputDIV>
        <S.InputDIV>
          <S.InputLabel htmlFor='category'>
              <span>동아리 분류</span>
          </S.InputLabel>
          <S.InputSpace
          id="category"
          type="category"
          placeholder="동아리 분류를 입력하세요." 
          {...register('category')}/>
        </S.InputDIV>
        <S.InputDIV>
          <S.InputLabel htmlFor='introduction'>
              <span>동아리 소개</span>
          </S.InputLabel>
          <S.InputSpace
          id="introduction"
          type="introduction"
          placeholder="동아리 소개를 입력하세요." 
          {...register('introduction')}/>
        </S.InputDIV>
      </S.SignupForm>
      <S.ClubSignupButton type="submit" id='signup' onClick={handleSubmit(onSubmit)}>
        <p>가입하기</p>
      </S.ClubSignupButton>
    </S.ClubSignupWrapper>
  )
}

export default ClubSignup;