import { Message } from './Notification';

import PropTypes from 'prop-types';

export function Notification({ message }) {
  return <Message>{message}</Message>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
