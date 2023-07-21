import React from 'react';
import { useNavigate } from 'react-router-dom';

function MemberClassify() {
  const navigate = useNavigate();

  const gotoClubRegister = () => {
    navigate("/clubregister")
  }
  const gotoMemberRegister = () => {
    navigate("/memregister")
  }
  return (
    <>
      <button onClick={gotoClubRegister}>동아리 가입</button>
      <button onClick={gotoMemberRegister}>일반 회원 가입</button>
    </>
  );
}

export default MemberClassify;