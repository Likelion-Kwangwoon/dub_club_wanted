import React from 'react';
import { useForm } from'react-hook-form';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { url } from '../../Url';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import imageCompression from 'browser-image-compression';
import './registerPage.scss';

function ClubRegister() {

  const [imageSrc, setImageSrc] = useState('');

  const navigate = useNavigate();

  const gotoLogin = () => {
    navigate("/loginpage");
  }

  const gotoMain = () => {
    navigate("/");
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
    thumbnail: yup
        .mixed()
        .required("프로필 사진을 등록해주세요!"),
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

  

  const registerUser = async (data) => {
    
    const submitData = {
      email: data.email,
      name: data.name,
      password: data.password,
      role: "CLUB",
      groupName: data.groupName,
      category: data.category,
      introduction: data.introduction
    }
    console.log(data.thumbnail[0])
    const formData = new FormData()
    formData.append('json', new Blob([JSON.stringify(submitData)], {type: "application/json"}));
    formData.append('image', data.thumbnail[0]);
    await axios.post(
        `${url}/app/member/sign-up-club`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          }
        },
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

  const imageResize = async(e) => {
    let file = e.target.files[0];
    console.log(file)
    const option = {
      maxSizeMB: 2,
      maxWidthOrHeight: 150,
    }

    try {
      const compressedFile = await imageCompression(file, option);
      const promise = imageCompression.getDataUrlFromFile(compressedFile);
      promise.then(result => {
        setImageSrc(result);
      })
    } catch (error) {
      console.log(error);
      alert("글 작성 실패");
    }
  }
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
          <div className="inputheader">단체명</div>
          <input
            name="name"
            placeholder="단체명"
            className='inputform'
            {...register('name')}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div style={{ margin: '56px 0'}}>
        <div className="inputheader">동아리 구분</div>
          <select
          className='useroption'
            {...register('groupName')} >
            <option value="UNION">연합 동아리</option>
            <option value="CENTRAL">중앙 동아리</option>
            <option value="GROUP">소모임</option>
            <option value="ETC">기타</option>
          </select>
          {errors.role && errors.role.message}
        </div>
        <div style={{ margin: '56px 0'}}>
          <div className="inputheader">동아리 분류</div>
          <input
            name="category"
            placeholder="ex) 밴드/스터디/종교"
            className='inputform'
            {...register('category')}
          />
          {errors.role && errors.role.message}
        </div>
        <div style={{ margin: '56px 0'}}>
        <div className="inputheader">프로필 사진</div>
          <input
            type="file"
            name="thumbnail"
            accept="image/*"
            onChange={(e) => {
              console.log(e);
              imageResize(e);
            }}
            {...register('thumbnail')}
          />
          <div className='preview'>
            {imageSrc && <img src={imageSrc} alt='preview-img' style={{ width: '150px' }}/>}
          </div>
          {errors.thumbnail && <p>{errors.thumbnail.message}</p>}
        </div>
        <div style={{ margin: '56px 0'}}>
          <div className="inputheader">동아리 소개</div>
          <input
            name="introduction"
            placeholder="동아리를 간단하게 소개해주세요!"
            className='inputform'
            {...register('introduction')}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div style={{ margin: '56px 0'}}>
          <button className='submitbutton' type='submit'>JOIN DUB</button>
        </div>
      </form>
    </div>
  );
}

export default ClubRegister;