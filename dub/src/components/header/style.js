import styled from 'styled-components';

export const HeadWrapper = styled.header`
  width: 100%;
  max-width: 1920px;
  height: 50px;
  position: fixed;
  z-index: 10;
  top: 0;
  font-size: 14px;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-bottom: 0.5px solid ${(props) => props.theme.base.black}; 
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`

export const NavWrapper = styled.nav`
  position: fixed;
  width: 1060px;
  background-color: ${(props) => props.theme.base.white};
  z-index: 1;
  
`

export const NavUl = styled.ul`
  display: grid;
  position: absolute;
  grid-template-columns: 1fr 5fr 1fr 1fr;
  width: 100%;
  height: 100%;
`

export const LogoWrapper = styled.li`
  left: 0;
`

export const DUBLogo = styled.img`
  width: 56px;
  height: 39px;
  color: ${(props) => props.theme.base.black};
`

export const NavTale = styled.li`
`