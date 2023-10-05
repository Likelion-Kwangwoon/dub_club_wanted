import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    text-align: center;
    width: 1920px;
    height: 1080px;
    font-family: "Pretendard Variable";
    margin: 0 auto;
    -ms-overflow-style: none; 
    scrollbar-width: none;
    &::-webkit-scrollbar{
      display: none;
    }
  }
`;