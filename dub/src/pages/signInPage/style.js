import styled from 'styled-components';

export const PageWrapper = styled.section`
  background-color: ${(props) => props.theme.base.white};
  width: 1920px;
  height: 1080px;
  position:relative;
`

export const SigninWrapper = styled.div`
  background-color: ${(props) => props.theme.base.beige};
  width: 390px;
  height: 844px;
  flex-shrink: 0;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.base.brown};
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
`