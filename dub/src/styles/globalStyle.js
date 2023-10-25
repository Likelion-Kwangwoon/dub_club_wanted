import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    text-align: center;
    font-family: "Pretendard Variable";
    width: 1920px;
    height: 1080px;
    -ms-overflow-style: none; 
    background-color: ${(props) => props.theme.base.white};
  }

  body {
    width: 1920px;
    height: 1080px;
  }

  
`;