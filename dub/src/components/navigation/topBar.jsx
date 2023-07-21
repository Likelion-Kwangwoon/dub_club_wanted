import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/store';
import './topBar.scss';
function TopBar() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.reducer.token);
  console.log(token);
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
    navigate("/classify");
  }
  const gotoLogOut = () => {
    dispatch(logOut([]))
    navigate("/")
  }

  const guestMenu = 
  <Fragment>
    <span className='menu' onClick={gotoLogin}>로그인</span>
    <span className='menu' onClick={gotoRegister}>회원가입</span>
  </Fragment>;

  const memberMenu = 
  <Fragment>
    <span className='menu' onClick={gotoInput}>글작성</span>
    <span className='menu' onClick={gotoLogOut}>로그아웃</span>
  </Fragment>;

  console.log(" 상단바 렌더링");
  return(
    <header>
      <span onClick={gotoMain} style={{  fontSize:'40px' , marginLeft:'20px', display: 'inline-block' }}>dub</span>
      <ul className='navMenu'>
        <nav>
          {
            token ?
            memberMenu
            :
            guestMenu
          }
        </nav>
      </ul>
    </header>
  );
}

export default TopBar;