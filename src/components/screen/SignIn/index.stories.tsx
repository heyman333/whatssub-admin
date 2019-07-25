import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import SignIn from '.';

storiesOf('SignIn', module)
  .add('default', () => (
    <SignIn
      onSubmitSuccess={() => { console.log('Success'); }}
    />));
