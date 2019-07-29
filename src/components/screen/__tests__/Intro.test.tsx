import React from 'react';
import * as renderer from 'react-test-renderer';
import { render, act, fireEvent, cleanup, waitForElement, getByTestId } from '@testing-library/react';

import { AppProvider, useAppContext } from '../../../providers';
import Intro from '../Intro';
import Button from '../../shared/Button';
import { getString } from '../../../../STRINGS';
import { ThemeType } from '../../../theme';

const props = {
  navigation: {
    navigate: jest.fn(),
  },
  history: {
    push: jest.fn(),
  },
};

const component = (
  <AppProvider>
    <Intro {...props} />
  </AppProvider>
);

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

// test for the container page in dom
describe('[Intro] screen rendering test', () => {
  let json: renderer.ReactTestRendererJSON;

  it('should render outer component and snapshot matches', () => {
    json = renderer.create(component).toJSON();
    expect(json).toMatchSnapshot();
  });
});

describe('[Intro] Interaction', () => {
  let rendered: renderer.ReactTestRenderer;
  let root: renderer.ReactTestInstance;
  let renderResult: any;

  afterEach(cleanup);

  it('should simulate [navigate to screen] when clicked', () => {
    rendered = renderer.create(component);
    root = rendered.root;

    const buttons = root.findAllByType(Button);

    const navList = ['/signin', '/main', '/404'];
    navList.map((pathname, index) => {
      buttons[index].props.onClick();
      expect(props.history.push).toBeCalledWith({
        pathname,
        state: {},
      });
    });
  });

  it('should change theme when [change theme] has been clicked', () => {
    renderResult = render(component);
    const btnChangeTheme = renderResult.getByText(getString('CHANGE_THEME'));
    const clickResult1 = fireEvent.click(btnChangeTheme);
    expect(clickResult1).toBe(true);
    const clickResult2 = fireEvent.click(btnChangeTheme);
    expect(clickResult2).toBe(true);
  });
});
