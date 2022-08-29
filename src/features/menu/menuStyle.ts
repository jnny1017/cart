import { Link } from 'react-router-dom';

import styled from 'styled-components';

const Wrap = styled.div`
  background: #e4e4e4;
`;

const Header = styled.div`
  display: flex;
  height: 60px;
  padding: 0 16px;
  justify-content: space-between;
  align-items: center;
  background: #fff;
`;

const Title = styled.h1`
  font-size: 19px;
  font-weight: bold;
`;

const StyledLink = styled(Link)`
  font-size: 20px;
  color: #000;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
`;

const Section = styled.div`
  margin-top: 16px;
  padding: 24px 16px;
  background: #fff;
`;

const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 24px;
`;

const Category = styled.h2`
  font-size: 18px;
  font-weight: bold;
`;

const Name = styled.strong`
  font-size: 14px;
  font-weight: bold;
`;

const Price = styled.span`
  font-size: 14px;
  color: #666;
`;

export {
  Wrap, Header, Title, StyledLink, Section, Category, Name, Price, MenuItem,
};
