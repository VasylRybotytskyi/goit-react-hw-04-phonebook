import styled from 'styled-components';

export const ContactItemWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const DeleteButton = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: #c82333;
  }
`;
