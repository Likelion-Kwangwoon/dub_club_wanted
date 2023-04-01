import React from 'react';
import { useState } from 'react';
//import '../sass/Button.scss';
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
      <header>
          <span className="pagetitle">동아리 모집 공고 작성</span>
      </header>

    <form className='editor'
          onSubmit={(e) => handleSubmit(e)}>
      
      {/*<h2>동아리 모집 공고 작성</h2>*/}
      <div className='detailbody'>
      <div className='detailbodyheader'>동아리 이름은 무엇인가요?</div>
          <p className='detailbodyguide'>동아리 이름을 작성해주세요</p>
          <div className='detailtextarea'>
          <textarea className='textarea' name="clubName" placeholder='clubname' value={state.clubName} onChange={handleChangeState}/>
          </div>
      
      <div className='detailbodyheader'>동아리 분과를 입력해주세요</div>
        <p className='detailbodyguide'>분과명은 체육/예술 .. </p>
      <textarea className='textarea' name="category" placeholder='category' value={state.category}
        onChange={handleChangeState}
        />
      
      <div>
          <div className='detailbodyheader'>공고 제목을 작성해주세요</div>
          <p className='detailbodyguide'>모든 학우들의 눈을 사로잡을만한 제목을 작성해주세요</p>
      <textarea className='textarea' name="title" placeholder='title' value={state.title} 
        onChange={handleChangeState}
        />
      </div>
      <div>
      <div className='detailbodyheader'>글과 함께 게시할 이미지를 선택해주세요</div>
      <p className='detailbodyguide'>이미지를 선택해주세요</p>
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
      <div>
      <div className='detailbodyheader'>동아리 설명 </div>
      <p className='detailbodyguide'>당신의 동아리를 마음껏 설명해주세요</p>
      <textarea className='textarea' name="content" placeholder='textarea' autoSize={{
          minRows: 3,
          maxRows: 7,
        }} value={state.content} 
        onChange={handleChangeState}
        />
      </div>
      <button className="Button" type='submit'>게시하기</button>
      </div>
    </form>
    </div>
  );
}

export default DetailInput;