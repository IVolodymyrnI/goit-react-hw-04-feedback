import { Component } from 'react';
import { FeedbackForm } from 'components/Feedback/FeedbackForm/FeedbackForm';
import { FeedbackSection } from 'components/Feedback/FeedbackSection/FeedbackSection';
import { Statistics } from 'components/Feedback/Statistics/Statistics';
import { Notification } from 'components/Feedback/Notification/Notification ';
import emojis from 'data/emojis';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onSubmitOption = value => {
    this.setState(prevState => ({ [value]: prevState[value] + 1 }));
  };

  countTotalFeedback(state) {
    const arrayFeedbacks = Object.values(state);
    return arrayFeedbacks.reduce((acc, number) => acc + number, 0);
  }

  countPositiveFeedbackPercentage({ total, good }) {
    const positivePercentage = Math.round((good / total) * 100);
    return `${positivePercentage}%`;
  }

  render() {
    const { good, bad, neutral } = this.state;
    const isFeedback = Boolean(good || bad || neutral);
    const total = this.countTotalFeedback(this.state);
    const positivePercentage = this.countPositiveFeedbackPercentage({
      good,
      total,
    });

    return (
      <FeedbackSection title="Will you come back?">
        <FeedbackForm
          onSubmit={value => this.onSubmitOption(value)}
          data={emojis}
        />
        {isFeedback ? (
          <Statistics
            good={good}
            bad={bad}
            neutral={neutral}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </FeedbackSection>
    );
  }
}
