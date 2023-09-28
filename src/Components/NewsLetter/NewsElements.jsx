import styled from 'styled-components';

export const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 30;
`;

export const FormContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20%;
  right: 45%;
  background: none;
  border: none;
  font-size: 48px;
  cursor: pointer;
  color: #ffffff;

`;