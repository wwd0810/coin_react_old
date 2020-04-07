import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body{
    font-size: 0.875em;
    line-height: 1.5;
    font-family: 'Malgun Gothic','맑은 고딕',NanumSquare,sans-serif,HelveticaNeue-Light,AppleSDGothicNeo-Light;
    color: #333;
    letter-spacing: -0.5px;
    font-weight: 400;

    background: #f1f1f1;

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
}
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  input, button {
    background-color: transparent;
    vertical-align: middle;
    border: none;
    outline: none;
    padding: 0;
  }

  input[type="text"] {
    height: 42px;
    line-height: 40px;
    border: 1px solid #e0e0e0;
    font-size: 1.071em;
    border-radius: 2px;
    background: #fff;
    padding: 0 10px;
    -webkit-appearance: none;
    box-shadow: none !important;
}

input[type="checkbox"] + label span {
    display: inline-block;
    width: 20px;
    height: 20px;
    line-height: 20px;
    margin: -2px 10px 0 0;
    vertical-align: middle;
    background: url(/sw/resources/img/checkBox-off.png) left top no-repeat;
    background-size: 20px 20px;
    cursor: pointer;
}
  h1, h2, h3, h4, h5, h6{
    font-family:'Maven Pro', sans-serif;
  }
  ol, ul, li {
    list-style: none;
  }
  img {
    height: auto;
    vertical-align: middle;
  }

  strong {
    font-weight: bold;
  }

  .box {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
}

img {
    width: 100%;
    height: auto;
    vertical-align: middle;
}

h2 {
    display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}

h3 {
    display: block;
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}

select {
    width: auto;
    height: 42px;
    line-height: 42px;
    font-size: 1.071em;
    padding: 5px 10px;
    border: 1px solid #e0e0e0;
    border-radius: 2px;
    overflow: hidden;
    background: #fff;
}

option {
    font-weight: normal;
    display: block;
    white-space: pre;
    min-height: 1.2em;
    padding: 0px 2px 1px;
}

`;

export default GlobalStyle;
