import React from 'react';
import TextArea from '../TextArea';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('TextArea', module)
  .add('free', () => {
    const props = {
      id: 'the-id',
      text: '',
      completed: false,
      isValid: false,
      placeholder: 'Please type something.'
    };
    return getItem(props);
  })
  .add('with max length', () => {
    const props = {
      id: 'the-id',
      text: 'Some content.',
      completed: true,
      isValid: true,
      placeholder: 'Please type something.',
      maxLength: 140
    };
    return getItem(props);
  });


function getItem(props) {
  return (
    <div className="todoapp">
      <div className="todo-list">
        <TextArea
          { ...props } />
      </div>
    </div>
  );
}
