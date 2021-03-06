import styled from 'styled-components';

const Button = styled.button`
  color: var(--primary);
  border: 1px solid var(--primary);
  background-color: var(--black);
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: all .3s;

  &:hover,
  &:focus { 
    background-color: var(--blackLighter);
    color: var(--white);
    border-color: var(--blackLighter);
  }
`;

export default Button;
