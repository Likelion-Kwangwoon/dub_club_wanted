import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/store';
import './topBar.scss';
function TopBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
  const gotoLogOut = () => {
    dispatch(logOut([]))
    navigate("/")
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
        <span className='menu' onClick={gotoLogOut}>로그아웃</span>
      </nav>
      </ul>
    </header>
  );
}

export default TopBar;