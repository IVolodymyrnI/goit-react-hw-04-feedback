import styled from 'styled-components';

export const Form = styled.form`
  margin-bottom: 25px;
`;

export const EmojisList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
  list-style-type: none;
  margin-bottom: 25px;
`;

export const EmojiImg = styled.img`
  height: 40px;
  width: 100%;
  transition: transform 250ms ease-in-out;
  transform: ${props =>
    props.name === props.value ? 'scale(1.25)' : 'scale(1)'};
`;

export const Button = styled.button`
  display: block;
  margin: 0 auto;
  background-color: transparent;
  padding: 10px 18px;
  box-shadow: 1px solid black;
  border-radius: 8px;
  transition: transform 250ms ease-in-out;

  :active {
    transform: scale(0.95);
  }
`;
