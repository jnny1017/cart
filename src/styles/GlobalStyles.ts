import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const globalStyles = createGlobalStyle`
  ${reset};

  a{
    text-decoration: none;
  }
  button {
    margin: 0;
    padding: 0;
    border: none;
    background: none;
  }
`;

export default globalStyles;
