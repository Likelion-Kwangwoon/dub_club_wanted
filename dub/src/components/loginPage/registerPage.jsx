import React from 'react';
import { useForm } from'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { url } from '../../Url';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
  const navigate = useNavigate();

  const gotoLogin = () => {
    navigate("/loginpage");
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
    role: yup
      .string()
      .required('회원 구분을 선택해주세요.'),
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
          role: formData.role},
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
      <h1>React Input Test!</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="email" placeholder="이메일" {...register('email')} />
        {errors.email && <p>{errors.email.message}</p>}
        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          {...register('password')}
        />
        {errors.password && <p>{errors.password.message}</p>}
        <input
          type="password"
          name="passwordConfirm"
          placeholder="비밀번호 확인"
          {...register('passwordConfirm')}
        />
        {errors.passwordConfirm && <p>{errors.passwordConfirm.message}</p>}
        <select
          {...register('role')} >
          <option value="USER">개인</option>
          <option value="CLUB">동아리</option>
        </select>
        {errors.role && errors.role.message}
        <input
          name="name"
          placeholder="이름 / 단체명"
          {...register('name')}
        />
        {errors.name && <p>{errors.name.message}</p>}
        <input type="submit" />
      </form>
    </div>
  );
}

export default RegisterPage;