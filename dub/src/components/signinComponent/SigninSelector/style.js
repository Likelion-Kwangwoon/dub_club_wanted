import styled from 'styled-components';

export const SelectorWrapper = styled.div`
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
`
export const KakaoButton = styled.button`
  background-color: transparent;
  border: none;
`

export const ClubSigninButton = styled.button`
  width: 183px;
  height: 45px;
  border-radius: 12px;
  background: #91867A;
`