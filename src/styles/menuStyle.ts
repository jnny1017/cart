import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../components/Button';

const Wrap = styled.div`
  padding-bottom: 60px;
  background: #fff;
`;

const Header = styled.div`
  display: flex;
  height: 60px;
  padding: 0 16px;
  justify-content: space-between;
  align-items: center;
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

  span {
    padding: 2px 6px;
    background: #e4e4e4;
    margin-left: 6px;
    border-radius: 4px;
  }
`;

const Section = styled.div`
  border-top: 12px solid #eee;
  padding: 0 16px;
  background: #fff;
`;

const MenuItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 24px 0;
  border-bottom: 1px solid #e0e0e0;

  &:last-child {
    margin-bottom: 0;
    border-bottom: 0;
  }

  & > * {

  }
`;

const Category = styled.h2`
  padding-top: 24px;
  font-size: 18px;
  font-weight: bold;
`;

const Name = styled.strong`
  font-size: 15px;
  font-weight: bold;
`;

const Price = styled.span`
  font-size: 14px;
  color: #666;
`;

const PointPrice = styled.span`
  font-size: 14px;
  color: #f00;
`;

const DeleteButton = styled(Button)`
  position: absolute;
  top: 24px;
  right: 0;
  font-size: 0;
  line-height: 0;
  cursor: pointer;

  svg {
    width: 14px;
    height: 14px;
  }
`;

const PaymentButton = styled(Button)`
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 16px;
  font-size: 16px;
  color: #fff;
  background: #1565c0;

  &:disabled {
    background-color: #dadada;
    color: rgba(0, 0, 0, 0.26);
  }
`;

const IconButton = styled(Button)`
  padding: 8px;
  font-size: 0;
  line-height: 0;
  cursor: pointer;

  svg {
    width: 18px;
    height: 18px;
  }
`;

const StyledCounter = styled.div`
  position: absolute;
  bottom: 8px;
  right: 0;
  display: flex;
  align-items: center;

  button {
    font-size: 0;
    line-height: 0;
    cursor: pointer;

    &:disabled {
      background: rgba(0, 0, 0, 0.12);
      opacity: 0.4;
    }
  }

  div {
    padding: 0 4px;
    font-size: 14px;
    line-height: 26px;
  }

  svg {
    width: 14px;
    height: 14px;
  }

  & > * {
    margin-left: -1px;
    min-width: 26px;
    height: 26px;
    border: 1px solid #bbb;
    text-align: center;
    box-sizing: border-box;
  }
`;

const ModalButton = styled(Button)`
  position: absolute;
  top: 50%;
  right: 0;
  padding: 8px 10px;
  color: #fff;
  background: #1565c0;
  border-radius: 4px;
  transform: translateY(-50%);

  &:disabled {
    color: #000;
    background: rgba(0,0,0,0.12);
    opacity: 0.4;
  }
`;

const StyledModal = styled.div`
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,.2);
`;

const ModalTitle = styled.div`
  z-index: 1;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 12px;
  background: #fff;
  border-bottom: 1px solid #ccc;
`;

const ModalContent = styled.div`
  overflow-y: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  width: 80%;
  min-height: 10%;
  max-height: 80%;
  padding: 16px;
  border-radius: 4px;
  background-color: #fff;
  transform: translate(-50%, -50%);
`;

const CloseButton = styled(Button)`
  padding: 8px;
  font-size: 0;
  line-height: 0;
  cursor: pointer;

  svg {
    width: 18px;
    height: 18px;
  }
`;

const RoundSpinner = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  background: rgba(0,0,0,0.3);
  width: 100%;
  height: 100%;

  span{
    position: fixed;
    top: 50%;
    left: 0;
    right: 0;
    width: 48px;
    height: 48px;
    margin: 0 auto;
    font-size: 0;
    line-height: 0;
    border: 5px solid #cddc39;
    border-bottom-color: transparent;
    border-radius: 50%;
    animation: rotation 1s linear infinite;
    transform: translateY(-50%);
    box-sizing: border-box;
  }

  @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    }
`;

export {
  Wrap, Header, Title, StyledLink, Section, Category, Name, Price, PointPrice, MenuItem, PaymentButton, DeleteButton,
  IconButton, StyledCounter, StyledModal, ModalTitle, ModalContent, ModalButton, CloseButton, RoundSpinner,
};
