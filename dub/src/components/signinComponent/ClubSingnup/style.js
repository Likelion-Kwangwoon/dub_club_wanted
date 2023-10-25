import styled from 'styled-components';

export const ClubSigninWrapper = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center; 
  justify-content: center;  
`
export const TitleLogo = styled.img`
  width: 77px;
  height: 54px;
  flex-shrink: 0;
  color:${(props) => props.theme.base.black};
  margin-top: 61px;
`
export const SigninForm = styled.form`
  margin: 100px 0 130px 0;
  
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
export const ClubSigninButton = styled.div`
  width: 183px;
  height: 45px;
  border-radius: 8px;
  background: ${(props) => props.theme.base.brown};
  font-size: 15px;
  margin-top: 16px;
  display: grid;
  place-items: center;
  color: ${(props) => props.theme.base.white};
`