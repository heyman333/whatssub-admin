import React, { useReducer } from 'react';
import { AppContext } from '../contexts';
import { IUser, ILocale } from '../types';
import { ThemeType } from '../theme';
import STRINGS from '../../STRINGS';

const AppConsumer = AppContext.Consumer;

export interface IAction {
  type:
    | 'reset-user'
    | 'set-user'
    | 'change-theme-mode'
    | 'show-modal'
    | 'close-modal';
  payload: any;
}

export interface IState {
  theme: ThemeType;
  user: IUser;
  show?: boolean;
  locale?: ILocale;
  id?: string;
  name?: string;
  nameKr?: string;
  icon?: string;
}
interface IProps {
  value?: {
    state?: IState;
    dispatch?: IAction;
  };
  children?: any;
}

const initialState: IState = {
  theme: ThemeType.LIGHT,
  user: {
    displayName: '',
    age: 0,
    job: '',
  },
  show: false,
  id: null,
  name: null,
  nameKr: null,
  icon: null,
};

const reducer = (state: IState, action: IAction) => {
  const { type, payload } = action;
  switch (type) {
    case 'reset-user':
      return { ...state, user: initialState.user };
    case 'set-user':
      return { ...state, user: payload };
    case 'change-theme-mode':
      return { ...state, theme: payload.theme };
    case 'show-modal':
      return {
        ...state,
        ...payload,
        show: true,
      };
    case 'close-modal':
      let payloadRemoveStates = payload.delState || [];
      payloadRemoveStates.forEach((candidate) => {
        delete state[candidate];
      });
      return {
        ...state,
        show: false,
      };
    default:
      return null;
  }
};

const AppProvider = (props: IProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const contexts = {
    state: (props.value && props.value.state) || state,
    dispatch: (props.value && props.value.dispatch) || dispatch,
  };
  return (
    <AppContext.Provider value={contexts}>{props.children}</AppContext.Provider>
  );
};
// This is almost used in test code
const useAppContext = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return { state, dispatch };
};

export { AppConsumer, AppProvider, AppContext, useAppContext };
