import { createGlobalStyle } from 'styled-components';
import { reset } from 'assets/styles/reset.js';

const GlobalStyle = createGlobalStyle`
  ${reset}
  html,
  body {
    .app-container {
      font-family: 'Inter', sans-serif;
      padding: 20px;
    }
  }
`;

export default GlobalStyle;
