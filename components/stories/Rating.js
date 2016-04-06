import React from 'react';
import Rating from '../Rating';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('Rating', module)
  .add('5 steps', () => {
    const props = {
      steps: 5
    };
    return getItem(props);
  })
  .add('10 steps', () => {
    const props = {
      steps: 10
    };
    return getItem(props);
  });


function getItem(props) {
  return (
    <div className="todoapp">
      <div className="todo-list">
        <Rating
          { ...props } />
      </div>
    </div>
  );
}
