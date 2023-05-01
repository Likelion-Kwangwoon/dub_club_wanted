import React from 'react';
import { useState } from 'react';
//import '../sass/Button.scss';
import './detailInput.scss';
import { useNavigate } from 'react-router-dom';
import imageCompression from 'browser-image-compression';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { url } from '../../Url';
function DetailInput() {

  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageSrc, setImageSrc] = useState('');
  const [image, setImage] = useState(null);

  const navigate = useNavigate();
  const token = useSelector((state) => state.reducer.token); 

  const imageResize = async(e) => {
    let file = e.target.files[0];
    setImage(file);
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

  const handleName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  }
  const handleCategory = (e) => {
    e.preventDefault();
    setCategory(e.target.value);
  }
  const handleTitle = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  }
  const handleContent = (e) => {
    e.preventDefault();
    setContent(e.target.value);
  }

  const handleSubmit = (e) => {

    e.preventDefault();
    const submitData = {
      'title' : title,
      'content' : content,
      'category' : category,
    };
    console.log(submitData);
    const formData = new FormData();

    formData.append('json', submitData);
    formData.append('images', image);
    // FormData의 key 확인
    for (const key of formData.keys()) {
      console.log(key);
    }
    // FormData의 value 확인
    for (const value of formData.values()) {
      console.log(value);
    }
    console.log(formData);
    try {
      axios.post(
        `${url}/app/post/write-post`,
        formData,
        {
          headers: {
            Authorization : token,
            'Content-Type': 'multipart/form-data',
          },
          transformRequest: formData => formData,
        },
      ).then(response => {
        alert(response.result);
        navigate('/')
      })
    } catch(error) {
      console.log(error.response);
      alert(error);
    }
  }

  return(
    <div className="detailInput">
      <div className="detailheader">
          <span>동아리 모집 공고 작성</span>
      </div>

    <form className='editor'
          onSubmit={(e) => handleSubmit(e)}>
      
      {/*<h2>동아리 모집 공고 작성</h2>*/}
      <div className='detailbody'>

      <div className='detailbodyheader'>동아리 이름은 무엇인가요?</div>
          <p className='detailbodyguide'>• 동아리 이름을 작성해주세요</p>
          <textarea className='textarea' name="clubName" placeholder='clubname' value={name} onChange={handleName}/>
      
      <div className='detailbodyheader'>동아리 분과를 입력해주세요</div>
        <p className='detailbodyguide'>• 분과명은 체육/예술 .. </p>
      <textarea className='textarea' name="category" placeholder='category' value={category}
        onChange={handleCategory}
        />
      
      <div>
          <div className='detailbodyheader'>공고 제목을 작성해주세요</div>
          <p className='detailbodyguide'>• 모든 학우들의 눈을 사로잡을만한 제목을 작성해주세요</p>
      <textarea className='textarea' name="title" placeholder='title' value={title} 
        onChange={handleTitle}
        />
      </div>
      <div>
      <div className='detailbodyheader'>글과 함께 게시할 이미지를 선택해주세요</div>
      <p className='detailbodyguide'>• 이미지를 선택해주세요</p>
      <input type="file"
            name="image" 
            placeholder='image/jpg/png/jpeg'
            accept="image/png, image/jpeg"
            onChange={(e) => {
              imageResize(e);
            }}
        />
      <div className='preview'>
        {imageSrc && <img src={imageSrc} alt='preview-img'/>}
      </div>
      </div>
      <div>
      <div className='detailbodyheader'>동아리 설명 </div>
      <p className='detailbodyguide'>• 당신의 동아리를 마음껏 설명해주세요</p>
      <div className='detailtextarea'>
      <textarea className='textarea' name="content" placeholder='textarea' autoSize={{
          minRows: 5,
          maxRows: 100,
        }} value={content} 
        onChange={handleContent}
        />
      </div>
      </div>
      <button className="Button" type='submit'>게시하기</button>
      </div>
    </form>
    </div>
  );
}

export default DetailInput;