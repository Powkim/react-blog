import { createGlobalStyle } from 'styled-components';
// import NanumGothic from '../styles/NanumGothic.woff';
// import variables from './GlobalVariables';

const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
  border:0;
  margin:0;
  padding:0;

}
ol, ul {
	list-style: none;
}
a{
  text-decoration:none;
  color:#000;
}
input:focus {outline: none;}

`;
export default GlobalStyle;