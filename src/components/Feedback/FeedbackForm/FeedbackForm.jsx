import { Component } from 'react';
import PropTypes from 'prop-types';
import { EmojisList, EmojiImg, Button, Form } from './FeedBackFormStyle';

export class FeedbackForm extends Component {
  state = {
    savedType: '',
  };

  onClick = ({ currentTarget }) => {
    const { name } = currentTarget;
    this.setState({ savedType: name });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.savedType);
    this.reset();
  };

  reset = () => {
    this.setState({ savedType: '' });
  };

  render() {
    const data = this.props.data;
    const { savedType } = this.state;
    return (
      <Form onSubmit={this.onSubmit}>
        <EmojisList>
          {data.map(({ id, type, img }) => (
            <li key={id}>
              <EmojiImg
                src={img}
                alt={type}
                name={type}
                value={savedType}
                onClick={this.onClick}
              />
            </li>
          ))}
        </EmojisList>
        <Button type="submit" isSaved={savedType}>
          Send
        </Button>
      </Form>
    );
  }
}

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
