import React from 'react';
import { useNavigate } from 'react-router-dom';
import './topBar.scss';
function TopBar() {
  const navigate = useNavigate();

  const gotoMain = () => {
    navigate("/");
  }
  const gotoLogin = () => {
    navigate("/loginpage");
  }
  const gotoInput = () => {
    navigate("/detailinput");
  }
  const gotoRegister = () => {
    navigate("/registerpage");
  }

  return(
    <header>
      <span onClick={gotoMain} style={{  fontSize:'40px' , marginLeft:'20px', display: 'inline-block' }}>dub</span>
      <ul className='navMenu'>
      <nav>
        <span className='menu' onClick={gotoInput}>글작성</span>
        <span className='menu'>지원하기</span>
        <span className='menu' onClick={gotoLogin}>로그인</span>
        <span className='menu' onClick={gotoRegister}>회원가입</span>
      </nav>
      </ul>
    </header>
  );
}

export default TopBar;