import React, { ComponentType, useCallback, forwardRef, useState } from 'react';
import styled from 'styled-components';
import { Formik, FormikProps, Field } from 'formik';
import * as Yup from 'yup';
import SimpleButton from './SimpleButton';
import { getString } from '../../../STRINGS';
import { IService } from '../../types';

export interface IServiceModalProviderState {
  show?: boolean;
  id?: string;
  name?: string;
  nameKr?: string;
  icon?: string;
  url?: string;
  description?: string;
};
export interface IServiceModalProviderPayload {
  show?: boolean;
  id?: string;
  name?: string;
  nameKr?: string;
  icon?: string;
  delState?: Array<string>;
  deleteMode?: boolean;
};

interface ISCWrapperProps {
  show: boolean;
}
interface IProps {
  onAddServiceClick?: () => void;
  onServiceClick?: (serviceId: string) => void;
  onUpdateServiceClick?: (serviceInfo: IServiceModalProviderState) => void;
  onDeleteServiceClick?: (serviceId: string) => void;
  onCloseServiceClick: () => void;
  serviceInfo: IServiceModalProviderState;
  onSubmitClick?: (service: IService) => void;
  onHandleImgChange?: () => void;
}
interface IHandleImageChange {
  file: Blob;
  setFieldValue?: any;
  field?: string;
  isPassed?: boolean;
}

const WhenNarrow = `
  @media only screen and (max-width: 760px),
  (min-device-width: 768px) and (max-device-width: 1024px)
`;
const inputCommonStyle = `
  width: 100%;
  border-radius: .3rem;
  padding: 0.5em;
  background: papayawhip;
  border: none;
  font-size: 1rem;
`;
const flexMiddle = `
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  overflow: scroll;
  display: flex;
  opacity: ${({ show }: ISCWrapperProps) => (show ? 1 : 0)};
  flex-direction: column;
  ${flexMiddle}
  transition: visibility 0s, opacity 0.2s linear;
  z-index: 9999;
  visibility: ${({ show }: ISCWrapperProps) => (show ? 'visible' : 'hidden')};
`;
const Container = styled.div`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.fontColor};
  align-self: stretch;
  padding: 2rem;
  margin: 2rem;
  overflow: scroll;
  border-radius: 0.5rem;
  box-shadow: 2px 4px 0.5rem 0 #323232;
`;
const InputContentArea = styled.div`
  margin: 1rem 0;
`;
const RowAlignRight = styled.div`
  text-align: right;
`;
const ShortInputBox = styled.input`
  ${inputCommonStyle}
`;
const LongInputBox = styled.textarea`
  ${inputCommonStyle}
`;

const InputRowRoot = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 0.2rem;
  ${WhenNarrow} {
    display: block;
  }
`;
const InputRowKey = styled.div`
  flex: 1;
`;
const InputRowValue = styled.div`
  flex: 2;
`;
const PreviewArea = styled.div`
  display: flex;
  ${flexMiddle}
  margin: .5rem;
`;
const PreviewImgArea = styled.div`
  width: 5rem;
  height: 5rem;
  background-color: papayawhip;
  display: flex;
  flex-direction: column;
  ${flexMiddle}
`;
const PreviewImg = styled.img`
  width: 100%;
  height: 100%;
`;
const FileInput = styled.input`
  width: 100%;
`;
const FileInputArea = styled.div`
  display: flex;
  flex: 3;
  flex-direction: column;
  justify-content: center;
`;
const AlertArea = styled.div`
  width: 100%;
  padding: 0.2rem;
  font-size: 0.8rem;
  color: red;
`;

const ServiceModal = forwardRef<HTMLDivElement, IProps>((props, ref) => {
  const {
    onUpdateServiceClick, onCloseServiceClick, onSubmitClick, onHandleImgChange, serviceInfo,
  } = props;
  const { show, id, name, nameKr, icon, url, description } = serviceInfo;
  const [imagePreviewSrc, setImagePreviewSrc] = useState(null);
  let initialValuesObj = {
    icon: icon,
    uploadIcon: null,
    serviceName: name || '',
    serviceNameKor: nameKr || '',
    url: url || '',
    description: description || '',
  };
  const SUPPORTED_FORMATS = ['image/gif', 'image/png'];
  const maxInputLength = 100;
  const maxLenValidation =
    getString('INPUT_MAX_VALIDATION') + ' ' + maxInputLength;

  const onCloseEvt = useCallback(() => {
    setImagePreviewSrc(null);
    onCloseServiceClick();
  }, [show]);
  const AlertAreaDom = ({ errorMsg }) => {
    return !errorMsg ? null : <AlertArea>{errorMsg}</AlertArea>;
  };
  const handleImageChange = ({
    file,
    setFieldValue,
    field,
  }: IHandleImageChange) => {
    if (file) {
      setFieldValue(field, file);
      const isPassed = imageChangeValidation(file);
      if (!isPassed) return;
      let reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviewSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const imageChangeValidation = (file) => {
    let iconExt = icon && 'image/' + icon.substring(icon.lastIndexOf('.') + 1);
    let target = file || { type: iconExt };
    return target && SUPPORTED_FORMATS.includes(target.type);
  };

  const formOnSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      console.log('submit! values', values);
      alert(JSON.stringify(values, null, 2));
      onSubmitClick({
        id,
        name: values.serviceName,
        nameKr: values.serviceNameKor,
        icon,
        url: values.url,
        description: values.description,
      });
    }, 400);
  };
  const ServiceContentsInputDom = ({
    handleSubmit,
    handleChange,
    handleBlur,
    setFieldValue,
    touched,
    values,
    errors,
  }: FormikProps<any>) => {
    const inputFileOnChange = (e) => {
      let file = e.target.files[0];
      let handleImageFn = handleImageChange;
      // let handleImageFn = onHandleImgChange || handleImageChange;
      handleImageFn({ file, setFieldValue, field: 'uploadIcon' });
    };
    const imgSrc = !imagePreviewSrc ? values.icon : imagePreviewSrc;
    return (
      <form onSubmit={handleSubmit}>
        <h3>{getString('SERVICE_ADD_BUTTON')}</h3>
        <InputContentArea>
          <InputRowRoot>
            <InputRowKey>{getString('ICON')}</InputRowKey>
            <InputRowValue>
              <InputRowRoot>
                <PreviewArea>
                  <PreviewImgArea data-testid={'imagePreview'}>
                    {imgSrc ? (
                      <PreviewImg src={imgSrc} data-testid={'imageArea'} />
                    ) : (
                      <div data-testid={'defaultPreview'}>
                        <div>png / gif</div>
                        <div>512 x 512</div>
                      </div>
                    )}
                  </PreviewImgArea>
                </PreviewArea>
                <FileInputArea>
                  <FileInput
                    data-testid={'icon'}
                    type="file"
                    name="uploadIcon"
                    onChange={inputFileOnChange}
                  />
                  <AlertAreaDom errorMsg={errors.uploadIcon} />
                </FileInputArea>
              </InputRowRoot>
            </InputRowValue>
          </InputRowRoot>
          <InputRowRoot>
            <InputRowKey>{getString('SERVICE_NAME')}</InputRowKey>
            <InputRowValue>
              <ShortInputBox
                data-testid={'serviceName'}
                type="text"
                name="serviceName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.serviceName}
              />
              {touched.serviceName && (
                <AlertAreaDom errorMsg={errors.serviceName} />
              )}
            </InputRowValue>
          </InputRowRoot>
          <InputRowRoot>
            <InputRowKey>{getString('SERVICE_NAME_KOR')}</InputRowKey>
            <InputRowValue>
              <ShortInputBox
                data-testid={'serviceNameKor'}
                type="text"
                name="serviceNameKor"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.serviceNameKor}
              />
              {touched.serviceNameKor && (
                <AlertAreaDom errorMsg={errors.serviceNameKor} />
              )}
            </InputRowValue>
          </InputRowRoot>
          <InputRowRoot>
            <InputRowKey>{getString('WEB_PAGE')}</InputRowKey>
            <InputRowValue>
              <ShortInputBox
                data-testid={'url'}
                type="text"
                name="url"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.url}
              />
              {touched.url && <AlertAreaDom errorMsg={errors.url} />}
            </InputRowValue>
          </InputRowRoot>
          <InputRowRoot>
            <InputRowKey>{getString('DESCRIPTION')}</InputRowKey>
            <InputRowValue>
              <LongInputBox
                data-testid={'description'}
                name="description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
              />
              {touched.description && (
                <AlertAreaDom errorMsg={errors.description} />
              )}
            </InputRowValue>
          </InputRowRoot>
        </InputContentArea>
        <RowAlignRight>
          <SimpleButton
            data-testid={`serviceModalCloseBtn`}
            onClick={onCloseEvt}
          >
            {getString('CANCEL')}
          </SimpleButton>
          <SimpleButton data-testid={'serviceSubmit'} type="submit">
            {getString('SAVE')}
          </SimpleButton>
        </RowAlignRight>
      </form>
    );
  };
  return (
    <Wrapper ref={ref} show={show}>
      <Container>
        <Formik
          onSubmit={formOnSubmit}
          initialValues={initialValuesObj}
          enableReinitialize={true}
          validationSchema={Yup.object().shape({
            uploadIcon: Yup.mixed().test(
              'fileFormat',
              getString('PNG_GIF_ONLY'),
              imageChangeValidation
            ),
            serviceName: Yup.string()
              .max(maxInputLength, maxLenValidation)
              .required(
                getString('SERVICE_NAME') + ' ' + getString('INPUT_REQUIRED')
              ),
            serviceNameKor: Yup.string()
              .max(maxInputLength, maxLenValidation)
              .required(
                getString('SERVICE_NAME_KOR') + ' ' + getString('INPUT_REQUIRED')
              ),
            url: Yup.string()
              .max(maxInputLength, maxLenValidation)
              .required(getString('WEB_PAGE') + ' ' + getString('INPUT_REQUIRED')),
            description: Yup.string()
              .max(maxInputLength, maxLenValidation)
              .required(
                getString('DESCRIPTION') + ' ' + getString('INPUT_REQUIRED')
              ),
          })}
          component={ServiceContentsInputDom}
        />
      </Container>
    </Wrapper>
  );
});

export default ServiceModal;
