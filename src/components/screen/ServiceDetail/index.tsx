import React, { Component } from 'react';
import styled from 'styled-components';
import ProductTable from './ProductTable';
import { getString } from '../../../../STRINGS';
import SimpleButton from '../../shared/SimpleButton';
import { IProduct, ServiceForServiceDetail } from '../../../types';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.fontColor};
`;

const Title = styled.h1`
  flex: 0 0 auto;
  align-self: flex-start;
  font-size: 2em;
  padding: 0.5em 5%;
`;

const Detail = styled.div`
  margin: 0.3em 5%;
  align-self: flex-start;
  display: flex;
  justify-content: flex-start;
`;
const Label = styled.div`
  font-weight: 800;
  flex: 0 0 5em;
`;

const ProductListTitle = styled.div`
  text-align: left;
`;

const TableWrapper = styled.div`
  align-self: center;
  width: 100%;
  max-width: 1100px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TableLabelAndControl = styled.div`
  flex: 0 0 auto;
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 1em 1% 0.5em 1%;
`;

const AddProductButton = styled(SimpleButton)`
  margin-right: 0.5em;
`;

interface IServiceDetail {
  history?: any;
  // Those Product related click handlers are used in test
  onAddProductClick?: () => void;
  onProductClick?: (productId: string) => void;
  onDeleteProductClick?: (productId: string) => void;
  serviceDetail: ServiceForServiceDetail;
  productList: Array<IProduct>;
}

function ServiceDetail(props: IServiceDetail) {
  const { history, onAddProductClick, serviceDetail, ...propsToProductTable } = props;
  const { name, url, description } = serviceDetail;
  return (
    <Container>
      <TableWrapper>
        <Title>Whatssub Admin</Title>
        <Detail>
          <Label>서비스 명</Label>
          <div>{name}</div>
        </Detail>
        <Detail>
          <Label>URL</Label>
          <div>{url}</div>
        </Detail>
        <Detail>
          <Label>설명</Label>
          <div>{description}</div>
        </Detail>

        <TableLabelAndControl>
          <ProductListTitle>{getString('PRODUCT_LIST')}</ProductListTitle>
          <AddProductButton data-testid='addProductButton' onClick={() => {
            props.onAddProductClick && props.onAddProductClick();
            // TODO: Integrate opening 'ProductModalEdit'. remove below 'console.log()' afterwards
            // console.log(`Add Product button is clicked. Open 'ProductModalEdit'`);
          }}>{getString('PRODUCT_ADD_BUTTON')}</AddProductButton>
        </TableLabelAndControl>
        <ProductTable {...propsToProductTable} />
      </TableWrapper>
    </Container>
  );
}

export default ServiceDetail;
