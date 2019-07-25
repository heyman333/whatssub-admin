import React from 'react';
import * as renderer from 'react-test-renderer';

import ServiceDetail from '../ServiceDetail';
import { render, fireEvent, getByTestId, wait, queryByTestId } from '@testing-library/react';
import { PRODUCT_LIST, SERVICE_DETAIL } from '../ServiceDetail/mock';

const props = {
  onAddProductClick: jest.fn(),
  onProductClick: jest.fn(),
  onDeleteProductClick: jest.fn(),
  serviceDetail: SERVICE_DETAIL,
  productList: PRODUCT_LIST,
};

describe('[ServiceDetail] render', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<ServiceDetail {...props} />).toJSON();
    expect(rendered).toMatchSnapshot();
    expect(rendered).toBeTruthy();
  });
});

describe('[ServiceDetail] Interaction', () => {
  const component = <ServiceDetail {...props} />;
  let renderResult: any;

  beforeAll(() => {
    renderResult = render(component);
  });

  it('simulate [onAddProductClick] is called when corresponding button is clicked', () => {
    const addProductButton = renderResult.getByTestId('addProductButton');
    fireEvent.click(addProductButton);
    expect(props.onAddProductClick).toHaveBeenCalled();
  });

  it('simulate [onDeleteProductClick] with desired [product id] as parameter is called when corresponding buttons is clicked', () => {
    PRODUCT_LIST.map((product, index) => {
      const chosenProductId = product.id;
      const deleteProductButton = renderResult.getByTestId(`deleteProductButton-${chosenProductId}`);
      fireEvent.click(deleteProductButton);
      expect(props.onDeleteProductClick.mock.calls[index][0]).toBe(chosenProductId);
    });
  });

  describe('simulate [onProductClick] with corresponding [product id]. and it should fire when clicking its specific children cells', () => {
    beforeEach(() => {
      // clear called counts
      props.onProductClick.mockClear();
    });

    it('simulate clicking desired children cells call [onProductClick]', () => {
      const testIdPrefixOfCells = ['idCell-', 'nameCell-', 'currencyCell-', 'priceCell-', 'subTypeCell-'];
      let callCount = 0;
      PRODUCT_LIST.map(({ id }) => {
        testIdPrefixOfCells.map((prefix) => {
          const cell = renderResult.getByTestId(`${prefix}${id}`);
          fireEvent.click(cell);
          expect(props.onProductClick.mock.calls[callCount++][0]).toBe(id);
        });
      });
    });

    it('simulate clicking control cell doesnt call [onProductClick]', () => {
      const testIdPrefixOfCells = ['controlCell-'];
      PRODUCT_LIST.map(({ id }) => {
        testIdPrefixOfCells.map((prefix) => {
          const cell = renderResult.getByTestId(`${prefix}${id}`);
          fireEvent.click(cell);
          expect(props.onProductClick).toHaveBeenCalledTimes(0);
        });
      });
    });
  });
});
