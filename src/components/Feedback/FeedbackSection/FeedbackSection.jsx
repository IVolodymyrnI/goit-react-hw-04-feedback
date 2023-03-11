import { Container, Title } from './FeedbackSectionStyle';
import PropTypes from 'prop-types';

export const FeedbackSection = ({ title, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
};

FeedbackSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.element, PropTypes.bool])
  ),
};
