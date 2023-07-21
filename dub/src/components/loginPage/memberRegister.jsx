import React from 'react';
import { useForm } from'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { url } from '../../Url';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './registerPage.scss';

function MemberRegister() {
  const navigate = useNavigate();

  const gotoLogin = () => {
    navigate("/loginpage");
  }

  const gotoMain = () => {
    navigate("/");
  }

  const formSchema = yup.object({
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
    gender: yup
      .string()
      .required('성별을 선택해주세요.'),
    name: yup
        .string()
        .required('이름을 입력해주세요.'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(formSchema),
  });

  

  const registerUser = async (formData) => {
    await axios.post(
        `${url}/app/member/sign-up`,
        { email: formData.email,
          name: formData.name,
          password: formData.password,
          gender: formData.gender},
    ).then(response => {
      console.log(response.data);
      switch(response.data.code) {
        case 1000:
          gotoLogin();
          alert(`${response.data.message}`);
          break;
        case 3200:
          alert(`${response.data.message}`);
          break;
        default:
          alert('Unexpected Error');
          break;
        }
    })
  };

  const onSubmit = (data) => {
    console.log(data);
    registerUser(data);
  }
  return (
    <div className="register">
      <h1 className='dub' onClick={gotoMain}>dub</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <span className='registertext'>지금 바로 CLUB DUB에 가입하세요</span>
        <div style={{ margin: '56px 0'}}>
        <div className="inputheader">이메일</div>
        <input name="email" placeholder="ex) kwu@naver.com" className='inputform' {...register('email')} />
        {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div style={{ margin: '56px 0'}}>
        <div className="inputheader">비밀번호</div>
        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          className='inputform'
          {...register('password')}
        />
        {errors.password && <p>{errors.password.message}</p>}
        </div>
        <div style={{ margin: '56px 0'}}>
        <div className="inputheader">비밀번호 확인</div>
        <input
          type="password"
          name="passwordConfirm"
          placeholder="비밀번호 확인"
          className='inputform'
          {...register('passwordConfirm')}
        />
        {errors.passwordConfirm && <p>{errors.passwordConfirm.message}</p>}
        </div>
        <div style={{ margin: '56px 0'}}>
        <div className="inputheader">이름</div>
        <input
          name="name"
          placeholder="이름"
          className='inputform'
          {...register('name')}
        />
        {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div style={{ margin: '56px 0'}}>
        <div className="inputheader">성별</div>
        <select
        className='useroption'
          {...register('gender')} >
          <option value="m">남</option>
          <option value="f">여</option>
        </select>
        {errors.role && errors.role.message}
        </div>
        
        <div style={{ margin: '56px 0'}}>
        <button className='submitbutton' type="submit">JOIN DUB</button>
        </div>
      </form>
    </div>
  );
}

export default MemberRegister;