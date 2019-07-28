import { configure } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { theme } from "../src/theme"

//global css
import "../dist/styles.css"

// automatically import all files ending in *.stories.tsx
const req = require.context('../src', true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

//global decorators 
addDecorator(withKnobs);

addDecorator(withThemesProvider([theme.light, theme.dark]));
