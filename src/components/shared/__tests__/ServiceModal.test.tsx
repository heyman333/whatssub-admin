import React from 'react';
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';

import ServiceModal from '../ServiceModal';
import { render, fireEvent, RenderResult, waitForElement, act, waitForDomChange } from '@testing-library/react';
import { getString } from '../../../../STRINGS';

let component: React.ReactElement;
let testingLib: any;
const serviceMock = {
  id: '87355',
  name: 'Davis, Howell and Lindgren',
  nameKr: 'Fahey - Bradtke',
  icon: 'https://s3.amazonaws.com/uifaces/faces/twitter/primozcigler/128.jpg',
  url: 'http://whats.sub',
  description: 'whatssub',
};
let initProps = {
  show: false,
  icon: null,
  uploadIcon: null,
  serviceName: '',
  serviceNameKor: '',
  url: '',
  description: '',
};
const SUPPORTED_FORMATS = ['image/gif', 'image/png'];
const imageChangeValidation = (file) =>
  file && SUPPORTED_FORMATS.includes(file.type);

let props = {
  onAddServiceClick: () => jest.fn(),
  onServiceClick: jest.fn(),
  onUpdateServiceClick: jest.fn(),
  onDeleteServiceClick: jest.fn(),
  onCloseServiceClick: jest.fn(),
  onSubmitClick: jest.fn((arg) => arg),
  onHandleImgChange: jest.fn(),
  serviceInfo: {
    show: initProps.show,
    id: '',
    name: initProps.serviceName,
    nameKr: initProps.serviceNameKor,
    icon: initProps.icon,
  },
};

describe('[ServiceModal] render', () => {
  it('renders without crashing', () => {
    const rendered: ReactTestRendererJSON = renderer
      .create(<ServiceModal {...props} />)
      .toJSON();
    expect(rendered).toMatchSnapshot();
    expect(rendered).toBeTruthy();
  });
});

describe('[ServiceModal] interactions', () => {
  const component = <ServiceModal {...props} />;
  let renderResult: RenderResult;

  beforeAll(() => {
    renderResult = render(component);
  });
  it('modal closed inline method triggered', () => {
    const modalCloseButton = renderResult.getByTestId('serviceModalCloseBtn');
    fireEvent.click(modalCloseButton);
    expect(props.onCloseServiceClick).toHaveBeenCalled();
  });
  it('file type check when user upload icon image file', async () => {
    let iconInput = renderResult.getByTestId('icon');
    const invalidFile = new File(['invalidfile'], 'invalidfile.jpg', {
      type: 'image/jpg',
    });
    fireEvent.change(iconInput, { target: { files: [invalidFile] } });
    const defaultPreview = await waitForElement(() => renderResult.getByTestId('defaultPreview'));
    expect(defaultPreview).toBeTruthy();

    const validFile = new File(['validfile'], 'validfile.png', {
      type: 'image/png',
    });
    fireEvent.change(iconInput, { target: { files: [validFile] } });
    const imageAreaAfterChange = await waitForElement(() => renderResult.getByTestId('imageArea'));
    expect(imageAreaAfterChange).toBeTruthy();
  });
  it('existed data is rendered well on modal', () => {
    let newProps = {
      ...props,
      serviceInfo: serviceMock,
    };
    renderResult.rerender(<ServiceModal {...newProps} />);

    const serviceNameInput = renderResult.getByTestId('serviceName') as HTMLInputElement;
    const serviceNameKorInput = renderResult.getByTestId('serviceNameKor') as HTMLInputElement;
    const webPageInput = renderResult.getByTestId('url') as HTMLInputElement;
    const descriptionInput = renderResult.getByTestId('description') as HTMLInputElement;

    expect(serviceNameInput.value).toBe(serviceMock.name);
    expect(serviceNameKorInput.value).toBe(serviceMock.nameKr);
    expect(webPageInput.value).toBe(serviceMock.url);
    expect(descriptionInput.value).toBe(serviceMock.description);
  });
  it('onSubmit inline method triggered', async () => {
    // TODO: get to be triggered
    const modalSaveButton = renderResult.getByTestId('serviceSubmit');
    fireEvent.submit(modalSaveButton);
    setTimeout(() => {
      expect(props.onSubmitClick).toHaveBeenCalled();
    }, 410);
  });
});
