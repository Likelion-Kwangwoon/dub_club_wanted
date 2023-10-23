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
`
export const InputDIV = styled.div`
`
export const InputLabel = styled.label`
`
export const InputSpace = styled.input`
`
export const ClubSigninButton = styled.div`
  width: 183px;
  height: 45px;
  border-radius: 4px;
  background: ${(props) => props.theme.base.brown};
  font-size: 15px;
  margin-top: 16px;
  display: grid;
  place-items: center;
  color: ${(props) => props.theme.base.white};
`