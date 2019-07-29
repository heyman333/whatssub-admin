import React, { useContext } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { AppContext } from '../../contexts';

import { createTheme } from '../../theme';
import Intro from '../screen/Intro';
import Temp from '../screen/Temp';
import SignIn from '../screen/SignIn';
import Main from '../screen/Main';
import { SERVICE_LIST } from '../screen/Main/mock';
import ServiceModal, { IServiceModalProviderState } from '../shared/ServiceModal';
import { IService } from '../../types';

interface IProps {
  store?: any;
}

function SwitchNavigator(props: {}) {
  const { state, dispatch } = useContext(AppContext);
  const { theme, show, id, name, nameKr, icon } = state;
  const serviceModalProps = {
    onAddServiceClick: () => dispatch({
      type: 'show-modal',
      payload: {},
    }),
    onServiceClick: (serviceId: string) => {},
    onUpdateServiceClick: ({ id, name, nameKr, icon }: IServiceModalProviderState) =>
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
    onCloseServiceClick: () => dispatch({
      type: 'close-modal',
      payload: {
        delState: ['id', 'name', 'nameKr', 'icon'],
      },
    }),
    onSubmitClick: (service: IService) => {},
  };
  const serviceInfo = { show, id, name, nameKr, icon };
  return (
    <ThemeProvider theme={createTheme(theme)}>
      <>
        <ServiceModal {...serviceModalProps} serviceInfo={serviceInfo} />
        <BrowserRouter>
          <div style={{ textAlign: 'center' }}>
            <Switch>
              <Route exact={true} path='/' render={(param) => <Intro {...param} {...props}/>} />
              <Route path='/signin' render={(param) => <SignIn {...param} {...props}/>} />
              <Route path='/main' render={(param) => <Main serviceList={SERVICE_LIST} {...param} {...props} {...serviceModalProps} />} />
              <Route render={(param) => <Temp {...param} {...props}/>} />
            </Switch>
          </div>
        </BrowserRouter>
      </>
    </ThemeProvider>
  );
}

export default SwitchNavigator;
