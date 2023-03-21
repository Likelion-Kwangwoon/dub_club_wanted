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

  return(
    <header>
      <span onClick={gotoMain}><h1>dub</h1></span>
      <nav>
        <span>지원하기</span>
        <span onClick={gotoLogin}>로그인</span>
      </nav>
    </header>
  );
}

export default TopBar;