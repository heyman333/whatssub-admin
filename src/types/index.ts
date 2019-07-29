// TODO: remove this sample interface
export interface IUser {
  displayName: string;
  age: number;
  job: string;
}

export interface ILocale {
  default: string;
  current: string;
}

export interface IService {
  id: string,
  name: string,
  nameKr: string,
  icon: string,
  url: string,
  description: string,
};
export type ServiceForMain = Pick<IService, 'id'|'name'|'nameKr'|'icon'>
export type ServiceForServiceDetail = Pick<IService, 'name'|'nameKr'|'url'|'description'>

export interface IProduct {
  id: string;
  name: string;
  currency: string;
  price: string;
  subType: string;
};
