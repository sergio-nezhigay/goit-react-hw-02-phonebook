export interface IFormValues {
  name: string;
  number: string;
}

export interface IFormHelpers {
  resetForm: () => void;
}

export interface IContact {
  id: string;
  name: string;
  number: string;
}

export interface IAppState {
  contacts: IContact[];
  filter: string;
}

export interface IonSubmitFunction {
  (values: IFormValues, helpers: IFormHelpers): void;
}
