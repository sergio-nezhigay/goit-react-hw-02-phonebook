import styled from '@emotion/styled';

export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: 500;
  &:nth-of-type(2) {
    margin-top: 12px;
  }
`;

export const Form = styled.form`
  width: 100%;
  padding: ${props => props.theme.spacing(4)} ${props => props.theme.spacing(4)};
  border-radius: 15px;
  border: 1px solid #80808033;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  background: #ecf0f3;

  padding-left: 20px;
  height: 50px;
  font-size: 14px;
  border-radius: 50px;
  box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px white;
  border: none;
  outline: none;
  &::placeholder {
    color: gray;
  }
  &:focus {
    border: 2px solid #1da1f2;
  }
`;

export const Button = styled.button`
  display: block;
  width: 100%;
  color: ${props => props.theme.colors.white};
  margin-top: 20px;
  background: ${props => props.theme.colors.accent};
  height: 40px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 900;
  box-shadow: 6px 6px 6px #cbced1, -6px -6px 6px white;
  transition: 0.5s;
  border: none;
  outline: none;
  &:hover {
    box-shadow: none;
  }
`;
