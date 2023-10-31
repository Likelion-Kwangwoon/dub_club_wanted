import styled from 'styled-components';

export const ClubSignupWrapper = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center; 
  justify-content: center;  
  position: relative;
`
export const HeadDiv = styled.div`
  width: 100%;
  height: 40px;
  top: 0px;
  position: absolute;
`
export const CancelBtn = styled.p`
  text-align: center;
  display: inline-block; 
  position: absolute;
  left: 30px;
  font-weight: 600;
  transform: translateY(100%);
`
export const TitleText = styled.p`
  font-size: 16px;
  font-weight: 600;
  color:${(props) => props.theme.base.black};
  position: absolute;
  left: 50%;
  transform: translate(-50%, 100%);
`
export const SignupForm = styled.form`
  margin: 50px 0 30px 0;
  
`
export const InputDIV = styled.div`
  margin: 20px 20px;
`
export const InputLabel = styled.label`
  margin-left: -50%;
  display: inline-block;
  margin: 10px 10px;
  text-align: left;
  width: 100%;
  span {
    text-align: left;
    color: ${(props) => props.theme.base.brown};
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`
export const InputSpace = styled.input`
  border: 0;
  outline: none;
  width: 330px;
  height: 45px;
  flex-shrink: 0;
  border-radius: 8px;
  padding: 0 14px;
  ::placeholder {
    font-style: small;
    font-weight: 600;
    line-height: normal;
  }
`
export const ClubSignupButton = styled.div`
  width: 358px;
  height: 45px;
  border-radius: 8px;
  background: ${(props) => props.theme.base.brown};
  font-size: 15px;
  margin-top: 16px;
  display: grid;
  place-items: center;
  color: ${(props) => props.theme.base.white};
`