import { useEffect } from 'react';
import { KAKAO_AUTH_URL } from '../../SocialOAuth';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
//import logo from '../../assets/logo_dub.svg'
//import { TitleLogo, KakaoButton } from './style';
import kakaoLogo from '../../assets/kakao_login.png'

function KakaoLoginPage() {

  const navigate = useNavigate();
  const token = useSelector((state) => state.token);

  useEffect(() => {
    if ( token !== "" ) {
      navigate('/');
      console.log("로그인 완료")
    }
  },[navigate, token]);
  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  }
  
  return (
    <>
      <div onClick={handleLogin}>
        <img src={kakaoLogo} alt="" />
      </div>
    </>
  );
}

export default KakaoLoginPage;