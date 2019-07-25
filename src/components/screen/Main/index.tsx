import React, { Component } from 'react';
import styled from 'styled-components';
import ServiceTable from './ServiceTable';
import { getString } from '../../../../STRINGS';
import SimpleButton from '../../shared/SimpleButton';
import { ServiceForMain } from '../../../types';

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

const ServiceListTitle = styled.div`
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
  margin: 0 1% 0.5em 1%;
`;

const AddServiceButton = styled(SimpleButton)`
  margin-right: 0.5em;
`;

interface IMain {
  history?: any;
  // Those Service related click handlers are used in test
  onAddServiceClick?: () => void;
  onServiceClick?: (serviceId: string) => void;
  onUpdateServiceClick?: (serviceId: string) => void;
  onDeleteServiceClick?: (serviceId: string) => void;
  serviceList: Array<ServiceForMain>;
}

function Main(props: IMain) {
  const { history, onAddServiceClick, ...propsToServiceTable } = props;
  return (
    <Container>
      <TableWrapper>
        <Title>Whatssub Admin</Title>
        <TableLabelAndControl>
          <ServiceListTitle>{getString('SERVICE_LIST')}</ServiceListTitle>
          <AddServiceButton data-testid='addServiceButton' onClick={() => {
            props.onAddServiceClick && props.onAddServiceClick();
            // TODO: Integrate opening 'ServiceModalEdit'. remove below 'console.log()' afterwards
            // console.log(`Add Service button is clicked. Open 'ServiceModalEdit'`);
          }}>{getString('SERVICE_ADD_BUTTON')}</AddServiceButton>
        </TableLabelAndControl>
        <ServiceTable {...propsToServiceTable} />
      </TableWrapper>
    </Container>
  );
}

export default Main;
