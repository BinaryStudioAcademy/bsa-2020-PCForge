import { Notification } from '../services/NotificationService/notification';

export enum MessageType {
  INITIAL_NOTIFICATIONS = 'INITIAL_NOTIFICATIONS',
  NEW_NOTIFICATION = 'NEW_NOTIFICATION',
  DELETE_NOTIFICATION = 'DELETE_NOTIFICATION',
  READ_NOTIFICATION = 'READ_NOTIFICATION',
  DELETE_NOTIFICATION_REQUEST = 'DELETE_NOTIFICATION_REQUEST',
  READ_NOTIFICATION_REQUEST = 'READ_NOTIFICATION_REQUEST',
}

export const inboundMessageTypes = [MessageType.DELETE_NOTIFICATION_REQUEST, MessageType.READ_NOTIFICATION_REQUEST];

export interface IInitialNotificationsMessage {
  type: MessageType.INITIAL_NOTIFICATIONS;
  payload: Notification[];
}

export interface INewNotificationMessage {
  type: MessageType.NEW_NOTIFICATION;
  payload: Notification;
}

export interface IDeleteNotificationMessage {
  type: MessageType.DELETE_NOTIFICATION;
  payload: Notification;
}

export interface IReadNotificationMessage {
  type: MessageType.READ_NOTIFICATION;
  payload: Notification;
}

export interface IDeleteNotificationRequestMessage {
  type: MessageType.DELETE_NOTIFICATION_REQUEST;
  payload: {
    userId: string;
    notificationId: string;
  };
}

export interface IReadNotificationRequestMessage {
  type: MessageType.READ_NOTIFICATION_REQUEST;
  payload: {
    userId: string;
    notificationId: string;
  };
}

export type IMessage =
  | IInitialNotificationsMessage
  | INewNotificationMessage
  | IDeleteNotificationMessage
  | IReadNotificationMessage
  | IDeleteNotificationRequestMessage
  | IReadNotificationRequestMessage;

export class Message {
  constructor(public readonly content: IMessage) {}
  public toString(): string {
    return JSON.stringify(this.content);
  }
  public static fromJSON(json: string): Message {
    const obj = JSON.parse(json);
    if (typeof obj.type !== 'string' || !Object.keys(MessageType).find((type) => type === obj.type))
      throw new Error(`Inbound message type must be string MessageType, got: [${typeof obj.type}](${obj.type})`);
    const message = new Message(obj);
    return message;
  }
  public static isInbound(messageType: MessageType): boolean {
    return inboundMessageTypes.includes(messageType);
  }
}
