import React, { useReducer, useContext } from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { ThemeProvider } from 'styled-components';
import Main from '.';
import { SERVICE_LIST } from './mock';
import { colors, theme, createTheme, ThemeType } from '../../../theme';
import ServiceModal, {
  IServiceModalProviderState,
} from '../../shared/ServiceModal';
import { IService } from '../../../types';
import { AppContext, AppProvider, IState, IAction } from '../../../providers/AppProvider';

const AppProviderDecorator = (storyFn) => (
  <AppProvider>
    {storyFn()}
  </AppProvider>
);
const ThemeProviderWrapper = (props) => {
  const { state, dispatch } = useContext(AppContext);
  const { theme, show, id, name, nameKr, icon } = state;

  const serviceModalProps = {
    onAddServiceClick: () => {
      dispatch({
        type: 'show-modal',
        payload: {},
      });
    },
    onServiceClick: (serviceId: string) => {},
    onUpdateServiceClick: ({
      id,
      name,
      nameKr,
      icon,
    }: IServiceModalProviderState) =>
      dispatch({
        type: 'show-modal',
        payload: {
          id,
          name,
          nameKr,
          icon,
        },
      }),
    onDeleteServiceClick: (serviceId: string) => {},
    onCloseServiceClick: () => {
      dispatch({
        type: 'close-modal',
        payload: {
          delState: ['id', 'name', 'nameKr', 'icon'],
        },
      });
      console.log('oncloseservice');
    },
    onSubmitClick: (service: IService) => {},
  };
  const serviceInfo = { show, id, name, nameKr, icon };

  return (
    <ThemeProvider theme={createTheme(theme)}>
      <>
        <ServiceModal {...serviceModalProps} serviceInfo={serviceInfo} />
        {props.children}
      </>
    </ThemeProvider>
  );
};
const ThemeProviderDecorator = (storyFn) => (
  <ThemeProviderWrapper>
    {storyFn()}
  </ThemeProviderWrapper>
);
const MainStory = () => (
  <Main
    serviceList={SERVICE_LIST}
    onAddServiceClick={action('onAddService')}
    onDeleteServiceClick={action('onDeleteService')}
    onServiceClick={action('onService')}
    onUpdateServiceClick={action('onUpdtate')}
  />
);

// const setupGlobalDecorators = () => {
//   // * the order is important, the decoratos wrap from bottom to top
//   addDecorator(ThemeProviderDecorator);
//   addDecorator(AppProviderDecorator);
// };

storiesOf('Main', module)
  .addDecorator(ThemeProviderDecorator)
  .addDecorator(AppProviderDecorator)
  .add('default', () => <MainStory />)
  .add('iphonex', () => <MainStory />, {
    viewport: { defaultViewport: 'iphonex' },
  });
