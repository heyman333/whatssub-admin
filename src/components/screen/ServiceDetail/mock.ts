import faker from 'faker';
import { IProduct, ServiceForServiceDetail } from '../../../types';

export const PRODUCT_LIST: Array<IProduct> = [{
  'id': '1',
  'name': 'Basic',
  'currency': 'KRW',
  'price': '5,000',
  'subType': '월 / 1',
},
{
  'id': '2',
  'name': 'Pro',
  'currency': 'KRW',
  'price': '120,000',
  'subType': '년 / 1',
},
{
  'id': '3',
  'name': 'Special',
  'currency': 'USD',
  'price': '110.00',
  'subType': '년 / 1',
}];

export const SERVICE_DETAIL: ServiceForServiceDetail = {
  name: 'Netflix',
  nameKr: '넷플릭스',
  url: 'netflix.com',
  description: '넷플릭스 입니다. 넷플릭스 입니다. 넷플릭스 입니다. 넷플릭스 입니다. 넷플릭스 입니다. 넷플릭스 입니다. 넷플릭스 입니다. 넷플릭스 입니다. 넷플릭스 입니다. ',
};
