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

export type Service = {
  id: string,
  name: string,
  nameKr: string,
  icon: string
};
