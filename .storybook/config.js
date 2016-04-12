import { configure } from '@kadira/storybook';
import '../index.css'

function loadStories() {
  require('../components/stories/');
}

configure(loadStories, module);
