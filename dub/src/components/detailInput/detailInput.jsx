import React from 'react';
import { useState } from 'react';
function DetailInput() {
  const [state, setState] = useState({
    image:"",
    title:"",
    author:"",
    content:"",
    category:""
  });

  const handleChangeState = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);

    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    console.log(state);
    alert("저장 성공");
  }

  return(
    <div className='editor'>
      <h2>동아리 모집 공고 작성</h2>
      <div>
        <input name="author" value={state.author}
        onChange={handleChangeState}
        />
      </div>
      <div>
      <input name="category" value={state.category}
        onChange={handleChangeState}
        />
      </div>
      <div>
      <input name="title" value={state.title}
        onChange={handleChangeState}
        />
      </div>
      <div>
      <input name="image" value={state.image}
        onChange={handleChangeState}
        />
      </div>
      <div>
      <textarea name="content" value={state.content}
        onChange={handleChangeState}
        />
      </div>
      <div>
        <button onClick={handleSubmit}>
          게시하기
        </button>
      </div>
    </div>
  );
}

export default DetailInput;