import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import ServiceDetail from '.';
import { PRODUCT_LIST, SERVICE_DETAIL } from './mock';

const Story = () => (
  <ServiceDetail
    productList={PRODUCT_LIST}
    serviceDetail={SERVICE_DETAIL}
    onAddProductClick={action('onAddProduct')}
    onDeleteProductClick={action('onDeleteProduct')}
    onProductClick={action('onProduct')} />);

storiesOf('ServiceDetail', module)
  .add('default', () => <Story />)
  .add('iphonex', () => <Story />, { viewport: { defaultViewport: 'iphonex' } });
