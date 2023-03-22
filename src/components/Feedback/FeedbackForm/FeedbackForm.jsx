import { useState } from 'react';
import PropTypes from 'prop-types';
import { EmojisList, EmojiImg, Button, Form } from './FeedBackFormStyle';

export const FeedbackForm = ({ data, onSubmit }) => {
  const [savedType, setSavedType] = useState('');

  const onClick = ({ currentTarget }) => {
    const { name } = currentTarget;
    setSavedType(name);
  };

  const onSubmiting = e => {
    e.preventDefault();
    onSubmit(savedType);
    reset();
  };

  const reset = () => {
    setSavedType('');
  };

  return (
    <Form onSubmit={onSubmiting}>
      <EmojisList>
        {data.map(({ id, type, img }) => (
          <li key={id}>
            <EmojiImg
              src={img}
              alt={type}
              name={type}
              value={savedType}
              onClick={onClick}
            />
          </li>
        ))}
      </EmojisList>
      <Button type="submit" isSaved={savedType}>
        Send
      </Button>
    </Form>
  );
};

FeedbackForm.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    })
  ),
  onSubmit: PropTypes.func.isRequired,
};
