import styled from 'styled-components';
import { Field, ErrorMessage, Form } from 'formik';

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;

  max-width: 30%;
  padding: 20px;
  border: 1px solid #333;
  border-radius: 5px;
  box-sizing: border-box;
`;

export const FormInput = styled(Field)`
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
`;

export const FormErrorMessage = styled(ErrorMessage)`
  color: red;
  margin-bottom: 5px;
`;

export const SubmitButton = styled.button`
  padding: 10px;
  border-radius: 4px;
  border: none;
  background-color: #333;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;
  &:hover,
  &:active {
    background-color: #fff;
    color: #333;
  }
`;
