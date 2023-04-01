import React from 'react';
import { useState } from 'react';
import '../sass/Button.scss';
import './detailInput.scss';
//import Button from '@mui/material/Button';
// import axios from 'axios';
function DetailInput() {
  const [state, setState] = useState({
    image:"",
    title:"",
    clubName:"",
    content:"",
    category:""
  });

  

  const [imageSrc, setImageSrc] = useState('');

  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  const handleChangeState = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);

    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
      image:imageSrc,
    })
    console.log(state);
    
    alert("저장 성공");
  }

  return(
    <div className="detailInput">

    <form className='editor'
          onSubmit={(e) => handleSubmit(e)}>
      <h2>동아리 모집 공고 작성</h2>
      <div   
        style={{
          margin: '56px 0',
        }}>
          <p>동아리 이름은 무엇인가요?</p>
        <input name="clubName" placeholder='clubname' value={state.clubName}
        onChange={handleChangeState}
        />
      </div>
      <div style={{
          margin: '56px 0',
        }}>
          <p>동아리 분과를 입력해주세요 / 분과명 여기에 제시할 것</p>
      <input name="category" placeholder='category' value={state.category}
        onChange={handleChangeState}
        />
      </div>
      <div style={{
          margin: '56px 0',
        }}>
          <p>공고 제목을 작성해주세요</p>
      <input name="title" placeholder='title' value={state.title} 
        onChange={handleChangeState}
        />
      </div>
      <div style={{
          margin: '56px 0',
        }}>
          
      <input type="file"
            name="image" 
            placeholder='image/jpg/png/jpeg'
            accept="image/jpg, image/png, image/jpeg"
            onChange={(e) => {
              encodeFileToBase64(e.target.files[0]);
            }}
        />
      <div className='preview'>
        {imageSrc && <img src={imageSrc} alt='preview-img'/>}
      </div>
      </div>
      <div style={{
          margin: '56px 0',
        }}>
      <textarea name="content" placeholder='textarea' autoSize={{
          minRows: 3,
          maxRows: 7,
        }} value={state.content} 
        onChange={handleChangeState}
        />
      </div>
      <div>
        <button className="Button" type='submit'>게시하기</button>
      </div>
    </form>
    </div>
  );
}

export default DetailInput;