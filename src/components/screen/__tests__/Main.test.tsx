import React, { useContext } from 'react';
import * as renderer from 'react-test-renderer';

import Main from '../Main';
import { render, fireEvent, getByTestId, wait, queryByTestId } from '@testing-library/react';
// import { renderHook, act } from '@testing-library/react-hooks';
import { SERVICE_LIST } from '../Main/mock';
import { ServiceForMain } from '../../../types';

const props = {
  onAddServiceClick: jest.fn(),
  onServiceClick: jest.fn(),
  onUpdateServiceClick: jest.fn(),
  onDeleteServiceClick: jest.fn(),
  serviceList: SERVICE_LIST,
};

describe('[Main] render', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(
      <Main {...props} />
    ).toJSON();
    expect(rendered).toMatchSnapshot();
    expect(rendered).toBeTruthy();
  });
});

describe('[Main] Interaction', () => {
  const component = <Main {...props} />;
  let renderResult: any;

  beforeAll(() => {
    renderResult = render(component);
  });

  it('simulate [onAddService] is called when corresponding button is clicked', () => {
    const addServiceButton = renderResult.getByTestId('addServiceButton');
    fireEvent.click(addServiceButton);
    expect(props.onAddServiceClick).toHaveBeenCalled();
  });

  it('simulate [onUpdateService] with desired [service id] as parameter is called when corresponding buttons is clicked', () => {
    SERVICE_LIST.map((service, index) => {
      const chosenServiceId = service.id;
      const updateServiceButton = renderResult.getByTestId(`updateServiceButton-${chosenServiceId}`);
      fireEvent.click(updateServiceButton);
      expect(props.onUpdateServiceClick.mock.calls[index][0].id).toBe(chosenServiceId);
    });
  });

  it('simulate [onDeleteService] with desired [service id] as parameter is called when corresponding buttons is clicked', () => {
    SERVICE_LIST.map((service, index) => {
      const chosenServiceId = service.id;
      const deleteServiceButton = renderResult.getByTestId(`deleteServiceButton-${chosenServiceId}`);
      fireEvent.click(deleteServiceButton);
      expect(props.onDeleteServiceClick.mock.calls[index][0]).toBe(chosenServiceId);
    });
  });

  describe('simulate [onServiceClick] with corresponding [service id]. and it should fire when clicking its specific children cells', () => {
    beforeEach(() => {
      props.onServiceClick.mockClear();
    });

    it('simulate clicking desired children cells call [onServiceClick]', () => {
      const testIdPrefixOfCells = ['idCell-', 'nameCell-', 'nameKrCell-', 'iconCell-'];
      let callCount = 0;
      SERVICE_LIST.map(({ id }) => {
        testIdPrefixOfCells.map((prefix) => {
          const cell = renderResult.getByTestId(`${prefix}${id}`);
          fireEvent.click(cell);
          expect(props.onServiceClick.mock.calls[callCount++][0]).toBe(id);
        });
      });
    });

    it('simulate clicking control cell doesnt call [onServiceClick]', () => {
      const testIdPrefixOfCells = ['controlCell-'];
      SERVICE_LIST.map(({ id }) => {
        testIdPrefixOfCells.map((prefix) => {
          const cell = renderResult.getByTestId(`${prefix}${id}`);
          fireEvent.click(cell);
          expect(props.onServiceClick).toHaveBeenCalledTimes(0);
        });
      });
    });
  });
});
