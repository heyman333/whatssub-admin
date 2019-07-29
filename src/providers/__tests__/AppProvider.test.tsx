import * as React from 'react';
import { AppProvider, useAppContext } from '../AppProvider';
import { ThemeType } from '../../theme';
import * as renderer from 'react-test-renderer';
import { render, act } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

describe('[AppProvider] rendering test', () => {
  const component = <AppProvider />;

  it('component and snapshot matches', () => {
    const { container } = render(component);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('[AppProvider] interactions', () => {
  const component = <AppProvider />;
  let renderResult;
  const user = {
    displayName: 'dooboolab',
    age: 30,
    job: '',
  };
  const initState = {
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

  beforeAll(() => {
    renderResult = renderHook(() => useAppContext(), {
      wrapper: ({ children }) => <AppProvider>{children}</AppProvider>,
    });
  });
  it('should check [reset-user] actions', async () => {
    const { result, waitForNextUpdate } = renderResult;
    act(() => {
      result.current.dispatch({
        type: 'reset-user',
        payload: {},
      });
    });
    expect(result.current.state.user).toEqual(initState.user);
  });
  it('should check [set-user] actions', async () => {
    const { result, waitForNextUpdate } = renderResult;
    act(() => {
      result.current.dispatch({
        type: 'set-user',
        payload: user,
      });
    });
    expect(result.current.state.user).toEqual(user);
  });
  it('should check [change-theme-mode] actions', async () => {
    const { result, waitForNextUpdate } = renderResult;
    act(() => {
      result.current.dispatch({
        type: 'change-theme-mode',
        payload: {
          theme: ThemeType.DARK,
        },
      });
    });
    expect(result.current.state.theme).toEqual(ThemeType.DARK);
  });
  it('should check [show-modal] actions', async () => {
    const { result, waitForNextUpdate } = renderResult;
    act(() => {
      result.current.dispatch({
        type: 'show-modal',
        payload: {},
      });
    });
    expect(result.current.state.show).toBeTruthy();
  });
  it('should check [close-modal] actions', async () => {
    const { result, waitForNextUpdate } = renderResult;
    act(() => {
      result.current.dispatch({
        type: 'close-modal',
        payload: {
          delState: ['id', 'name', 'nameKr', 'icon'],
        },
      });
    });
    expect(result.current.state.id).toBeUndefined();
    expect(result.current.state.name).toBeUndefined();
    expect(result.current.state.nameKr).toBeUndefined();
    expect(result.current.state.icon).toBeUndefined();
    expect(result.current.state.show).toBeFalsy();
  });
  it('should check default actions', async () => {
    const { result, waitForNextUpdate } = renderResult;
    act(() => {
      result.current.dispatch({
        type: 'default',
        payload: {},
      });
    });
    expect(result.current.state).toBeNull();
  });
});
