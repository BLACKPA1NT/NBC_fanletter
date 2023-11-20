import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle` 



  ${reset} // styled-reset이라는 패키지를 설치해야한다. 몇가지만 reset해 줄 경우 사용하지 않아도 무방하다.

    body {
      background-color: #dff0f2;
    }

    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    input, textarea { 
      -moz-user-select: auto;
      -webkit-user-select: auto;
      -ms-user-select: auto;
      user-select: auto;
    }
    input:focus {
      outline: none;
    }

    button {
      border: none;
      background: none;
      padding: 0;
      cursor: pointer;
    }

    @font-face {
    font-family: 'SCoreDream';
    font-weight: 100; 
    font-style: normal; 
    src: url(https://cdn.jsdelivr.net/gh/webfontworld/SCoreDream/SCoreDream1.woff2) format('woff2'),
         url(https://cdn.jsdelivr.net/gh/webfontworld/SCoreDream/SCoreDream1.woff) format('woff');
    font-display: swap;
}
@font-face {
    font-family: 'SCoreDream';
    font-weight: 200; 
    font-style: normal; 
    src: url(https://cdn.jsdelivr.net/gh/webfontworld/SCoreDream/SCoreDream2.woff2) format('woff2'),
         url(https://cdn.jsdelivr.net/gh/webfontworld/SCoreDream/SCoreDream2.woff) format('woff');
    font-display: swap;
}
@font-face {
    font-family: 'SCoreDream';
    font-weight: 300; 
    font-style: normal; 
    src: url(https://cdn.jsdelivr.net/gh/webfontworld/SCoreDream/SCoreDream3.woff2) format('woff2'),
         url(https://cdn.jsdelivr.net/gh/webfontworld/SCoreDream/SCoreDream3.woff) format('woff');
    font-display: swap;
}
@font-face {
    font-family: 'SCoreDream';
    font-weight: 400; 
    font-style: normal; 
    src: url(https://cdn.jsdelivr.net/gh/webfontworld/SCoreDream/SCoreDream4.woff2) format('woff2'),
         url(https://cdn.jsdelivr.net/gh/webfontworld/SCoreDream/SCoreDream4.woff) format('woff');
    font-display: swap;
}
@font-face {
    font-family: 'SCoreDream';
    font-weight: 500; 
    font-style: normal; 
    src: url(https://cdn.jsdelivr.net/gh/webfontworld/SCoreDream/SCoreDream5.woff2) format('woff2'),
         url(https://cdn.jsdelivr.net/gh/webfontworld/SCoreDream/SCoreDream5.woff) format('woff');
    font-display: swap;
}
@font-face {
    font-family: 'SCoreDream';
    font-weight: 600; 
    font-style: normal; 
    src: url(https://cdn.jsdelivr.net/gh/webfontworld/SCoreDream/SCoreDream6.woff2) format('woff2'),
         url(https://cdn.jsdelivr.net/gh/webfontworld/SCoreDream/SCoreDream6.woff) format('woff');
    font-display: swap;
}
@font-face {
    font-family: 'SCoreDream';
    font-weight: 700; 
    font-style: normal; 
    src: url(https://cdn.jsdelivr.net/gh/webfontworld/SCoreDream/SCoreDream7.woff2) format('woff2'),
         url(https://cdn.jsdelivr.net/gh/webfontworld/SCoreDream/SCoreDream7.woff) format('woff');
    font-display: swap;
}
@font-face {
    font-family: 'SCoreDream';
    font-weight: 800; 
    font-style: normal; 
    src: url(https://cdn.jsdelivr.net/gh/webfontworld/SCoreDream/SCoreDream8.woff2) format('woff2'),
         url(https://cdn.jsdelivr.net/gh/webfontworld/SCoreDream/SCoreDream8.woff) format('woff');
    font-display: swap;
}
@font-face {
    font-family: 'SCoreDream';
    font-weight: 900; 
    font-style: normal; 
    src: url(https://cdn.jsdelivr.net/gh/webfontworld/SCoreDream/SCoreDream9.woff2) format('woff2'),
         url(https://cdn.jsdelivr.net/gh/webfontworld/SCoreDream/SCoreDream9.woff) format('woff');
    font-display: swap;
}
`;

export default GlobalStyles;
