import React from 'react';
import { useState } from 'react';
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

    <form className='editor'
          onSubmit={(e) => handleSubmit(e)}>
      <h2>동아리 모집 공고 작성</h2>
      <div  
        style={{
          margin: '24px 0',
        }}>
        <input name="clubName" placeholder='clubname' value={state.clubName}
        onChange={handleChangeState}
        />
      </div>
      <div style={{
          margin: '24px 0',
        }}>
      <input name="category" placeholder='category' value={state.category}
        onChange={handleChangeState}
        />
      </div>
      <div style={{
          margin: '24px 0',
        }}>
      <input name="title" placeholder='title' value={state.title} 
        onChange={handleChangeState}
        />
      </div>
      <div style={{
          margin: '24px 0',
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
          margin: '24px 0',
        }}>
      <textarea name="content" placeholder='textarea' autoSize={{
          minRows: 3,
          maxRows: 7,
        }} value={state.content} 
        onChange={handleChangeState}
        />
      </div>
      <div>
        <button type='submit'>
          게시하기
        </button>
      </div>
    </form>
  );
}

export default DetailInput;