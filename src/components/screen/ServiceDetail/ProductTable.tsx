import React, { useState } from 'react';
import { IProduct } from '../../../types';
import styled, { css } from 'styled-components';
import { getString } from '../../../../STRINGS';
import { colors } from '../../../theme';
import SimpleButton from '../../shared/SimpleButton';

const productLabel: IProduct =
{
  id: 'ID',
  name: '상품명',
  currency: '통화',
  price: '가격',
  subType: '갱신단위 / 주기',
};

const Hide = css`
  position: absolute;
  top: -9999px;
  left: -9999px;
`;

const WhenNarrow = `
  @media only screen and (max-width: 760px),
  (min-device-width: 768px) and (max-device-width: 1024px)
`;

const cellPadding = css`
  padding: 0 0 0 0.5em;
`;

const Container = styled.div`
  overflow-y: auto; 
  height: 100%;
  width: 100%;
`;

const Table = styled.table`
  margin: auto;

  width: 95%;
  ${WhenNarrow} {
    display: block;
  }
`;

const Thead = styled.thead`
  ${WhenNarrow} {
    ${Hide}
  }
`;

const Th = styled.th`
  z-index: 1;
  position: sticky; 
  top: 0;
  background:#ccc;
  color:${colors.darkBackgroundLight};

  ${cellPadding}
`;

const Tr = styled.tr`
  color: ${({ theme }) => theme.fontColor};
  background-color: ${({ theme }) => theme.background};
  ${WhenNarrow} {
    display: block;  
    margin: 0 0 1rem 0;    
  }
  &:nth-child(even){
    background-color: #eee;
    color: ${colors.darkBackgroundLight};
  }
  &:hover{
    background-color: ${({ theme }) => theme.serviceListHoveColor};
  }
`;

const Tbody = styled.tbody`
  ${WhenNarrow} {
    display: block;
  }
`;

const leftSideOverRightSidePortion = `35%`;
const labelMarginLift = `0.2em`;
const labelContentWhenNarrow = css`
  /* like a table header */
  position: absolute;
  /* Top/left values mimic padding */
  top: 0;
  left: 0;

  margin-left: ${labelMarginLift};
  width: ${leftSideOverRightSidePortion}-${labelMarginLift};
  white-space: nowrap;
`;
interface ICell {
  label: string
}
const Cell = styled.td<ICell>`
  text-align: center;
  vertical-align: middle;
  ${cellPadding}

  ${WhenNarrow} {
    display: block;
    /* like a row */
    border: none;
    border-bottom: 1px solid #eee;
    position: relative;
    padding-left: ${leftSideOverRightSidePortion};

    text-align: left;
    &:before {
      ${labelContentWhenNarrow}
      content: '${(props) => props.label}';
    }
  }
`;

interface IClickableCell {
  scaleUp?: boolean
}
const ClickableCell = styled(Cell) <IClickableCell>`
  &:hover {
    cursor: pointer;
  }

  /* Visual feedback*/
  transition: all .1s ease-in-out;
  transform: ${(props) => props.scaleUp ? `scale(1.1)` : `none`};
  ${WhenNarrow} {
    transform: scale(1);
  }
`;

const ControlCell = styled(Cell)`
  /* centering buttons */
  vertical-align: middle;
  height:42px;
  ${WhenNarrow}{
    height: auto;
  }

  display: flex;
  justify-content: center;
  align-items: center;  
`;

interface IProps {
  onDeleteProductClick?: (productId: string) => void;
  onProductClick?: (productId: string) => void;
  productList: Array<IProduct>;
}
const ProductTable: React.FC<IProps> = (props) => {
  const [hoverRow, setHoverRow] = useState('');
  const content = props.productList.map(({ id, name, currency, price, subType }) => {
    // scale up some cells when mouse is hovering on its parent's row -> visual feedback for user
    const scaleUp = id === hoverRow;
    return (
      <Tr data-testid={`tableRow-${id}`} onMouseOver={() => { setHoverRow(id); }} key={id} onClick={(event: any) => {
        // Using bubbling events from clicking desired cells to fire navigation
        // Currently event condition fires with all cells execpt ControlCell. in ControlCell it uses `event.stopPropagation()` to prevent event to bubble up
        props.onProductClick && props.onProductClick(id);
        // TODO: Integrate 'ProductDetail' screen navigation. remove below 'console.log()' afterwards
        // console.log(`Navigate to 'ProductDetail' Screen with Product ID:${id}`);
      }
      }>
        <ClickableCell data-testid={`idCell-${id}`} label={productLabel.id} scaleUp={scaleUp}>{id}</ClickableCell>
        <ClickableCell data-testid={`nameCell-${id}`} label={productLabel.name} scaleUp={scaleUp}>{name}</ClickableCell>
        <ClickableCell data-testid={`currencyCell-${id}`} label={productLabel.currency} scaleUp={scaleUp}>{currency}</ClickableCell>
        <ClickableCell data-testid={`priceCell-${id}`} label={productLabel.price} scaleUp={scaleUp}>{price}</ClickableCell>
        <ClickableCell data-testid={`subTypeCell-${id}`} label={productLabel.subType} scaleUp={scaleUp}>{subType}</ClickableCell>

        <ControlCell data-testid={`controlCell-${id}`} label={null} onClick={(e) => { e.stopPropagation(); }}>
          <SimpleButton data-testid={`deleteProductButton-${id}`}
            onClick={() => {
              props.onDeleteProductClick && props.onDeleteProductClick(id);
              // TODO: Integrate opening 'ProductModalDelete' confirmation modal. remove below 'console.log()' afterwards
              // console.log(`Delete button is clicked. Open confirming modal for deleting Product Id:${id}`);
            }}>{getString('DELETE_BUTTON')}</SimpleButton>
        </ControlCell>
      </Tr >
    );
  });
  return (
    <Container>
      <Table>
        <Thead>
          <Tr>
            <Th>{productLabel.id}</Th>
            <Th>{productLabel.name}</Th>
            <Th>{productLabel.currency}</Th>
            <Th>{productLabel.price}</Th>
            <Th>{productLabel.subType}</Th>
            <Th>{null}</Th>
          </Tr>
        </Thead>
        <Tbody >
          {content}
        </Tbody>
      </Table>
    </Container>
  );
};

export default ProductTable;
