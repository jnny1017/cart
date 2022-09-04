import { Link } from 'react-router-dom';

import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  height: 60px;
  padding: 0 8px;
  justify-content: space-between;
  align-items: center;
`;

const Menu = styled.h1`
  font-size: 20px;
`;

const StyledLink = styled(Link)`
  font-size: 20px;
  text-decoration: none;
`;

export { Header, Menu, StyledLink };
