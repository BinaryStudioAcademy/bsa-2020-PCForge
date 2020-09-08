export enum AlertType {
  INFO = 'INFO',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  WARNING = 'WARNING',
}

export interface IAlert {
  id: string;
  type: AlertType;
  text: string;
}
