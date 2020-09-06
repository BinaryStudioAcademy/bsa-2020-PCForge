export enum NotificationType {
  INFO = 'INFO',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  WARNING = 'WARNING',
}

interface INotificationWithLinkPayload {
  type: 'link';
  value: string;
}

export type INotificationPayload = INotificationWithLinkPayload;

export interface INotification {
  id: string;
  type: NotificationType;
  text: string;
  createdAt: Date;
  readAt: Date | null;
  payload: INotificationPayload | null;
}
