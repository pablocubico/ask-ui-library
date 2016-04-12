import React from 'react';
import Audio from '../Audio';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('Audio', module)
  .add('30 secs snippet', () => {
    const props = {
    };
    return getItem(props);
  });

function getItem(props) {
  return (
    <div className="todoapp">
      <div className="todo-list">
        <Audio
          { ...props } />
      </div>
    </div>
  );
}
