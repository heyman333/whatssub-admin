import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Main from '.';
import { SERVICE_LIST } from './mock';

const MainStory = () => (
  <Main
    serviceList={SERVICE_LIST}
    onAddServiceClick={action('onAddService')}
    onDeleteServiceClick={action('onDeleteService')}
    onServiceClick={action('onService')}
    onUpdateServiceClick={action('onUpdtate')}
  />);

storiesOf('Main', module)
  .add('default', () => <MainStory />)
  .add('iphonex', () => <MainStory />, { viewport: { defaultViewport: 'iphonex' } });
