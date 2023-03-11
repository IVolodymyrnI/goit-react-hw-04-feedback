import { List, Item, Container } from './StatisticsStyle';
import PropTypes from 'prop-types';

export function Statistics({ positivePercentage, total, bad, good, neutral }) {
  return (
    <Container>
      <List>
        <Item>Total: {total}</Item>
        <Item>Positive: {positivePercentage}</Item>
      </List>
      <List>
        <Item>Good: {good}</Item>
        <Item>Neutral: {neutral}</Item>
        <Item>Bad: {bad}</Item>
      </List>
    </Container>
  );
}

Statistics.propTypes = {
  positivePercentage: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
