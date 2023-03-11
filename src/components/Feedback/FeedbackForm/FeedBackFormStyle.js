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
  cursor: pointer;
  transition: transform 250ms ease-in-out;
  transform: ${props =>
    props.name === props.value ? 'scale(1.25)' : 'scale(1)'};
`;

export const Button = styled.button`
  display: block;
  margin: 0 auto;
  border: transparent;
  background-color: transparent;
  padding: 10px 18px;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 250ms ease-in-out;
  ${props => (props.isSaved ? saved : notSaved)};

  :active {
    transform: scale(0.95);
  }
`;

const saved = {
  pointerEvents: 'all',
  color: 'black',
  border: '2px solid black',
};

const notSaved = {
  pointerEvents: 'none',
  color: '#b1b1b1',
  border: '2px solid #b1b1b1',
};
