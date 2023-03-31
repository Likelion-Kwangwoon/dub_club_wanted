import React from 'react';
// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import LoginUser from '../../redux/_actions/action';
import './loginPage.scss';

// function LoginPage(props) {
//   const [Email, setEmail] = useState("");
//   const [Password, setPassword] = useState("");

//   const dispatch = useDispatch();

//   const onEmailHandler = (event) => {
//       setEmail(event.currentTarget.value);
//   }
//   const onPasswordHandler = (event) => {
//       setPassword(event.currentTarget.value);
//   }
//   const onSubmitHandler = (event) => {
//     event.preventDefault();   
//     console.log('Eamil', Email);
//     console.log('Password', Password);
//     let body = {
//       email: Email,
//       password: Password
//     }
//     dispatch(LoginUser(body))
//       .then(response => {
//         if(response.payload.loginSuccess) {
//             props.history.push('/') // 페이지 이동을 해줄 때
//         } else {
//             alert('아이디 혹은 비밀번호 오류입니다. 다시 입력해주세요.');
//         }
//       })
//   }
//   return (
//     <div style={{
//       display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh'
//     }}>
//       <form style={{display: 'flex', flexDirection: 'column'}}
//         onSubmit={onSubmitHandler}
//       >
//         <label>Email</label>
//         <input type="email" value={Email} onChange={onEmailHandler} />
//         <label>Password</label>
//         <input type="password" value={Password} onChange={onPasswordHandler} />
//         <br />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   )
// }
function LoginPage() {
  return(
    <h1>로그인 페이지</h1>
  )
}

export default LoginPage;