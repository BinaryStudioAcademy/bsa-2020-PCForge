import { createUUID } from '../../../helpers/uuid.helper';

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

export class Notification {
  public readonly text: string;
  public readonly type: NotificationType;
  public readonly id: string;
  public readonly createdAt: Date;
  public readAt: Date | null;
  public readonly payload: INotificationPayload | null;
  constructor({
    text,
    type,
    id,
    createdAt,
    readAt,
    payload,
  }: {
    text: string;
    type?: NotificationType;
    id?: string;
    createdAt?: Date;
    readAt?: Date;
    payload?: INotificationPayload | null;
  }) {
    this.text = text;
    this.type = type || NotificationType.INFO;
    this.id = id || createUUID();
    this.createdAt = createdAt || new Date();
    this.readAt = readAt || null;
    this.payload = payload || null;
  }
  public toString(): string {
    return JSON.stringify({
      type: this.type,
      text: this.text,
      id: this.id,
      createdAt: this.createdAt,
      readAt: this.readAt,
      payload: this.payload,
    });
  }
  public static fromJSON(json: string): Notification | never {
    const obj = JSON.parse(json);
    if (typeof obj.text !== 'string')
      throw new Error(`Notification text must be string type, got: [${typeof obj.text}](${obj.text})`);
    if (typeof obj.type !== 'string' || !Object.keys(NotificationType).find((type) => type === obj.type))
      throw new Error(`Notification type must be string NotificationType, got: [${typeof obj.type}](${obj.type})`);
    if (typeof obj.id !== 'string')
      throw new Error(`Notification id must be string type, got: [${typeof obj.id}](${obj.id})`);
    if (typeof obj.createdAt !== 'string')
      throw new Error(
        `Notification createdAt must be string(Date) type, got: [${typeof obj.createdAt}](${obj.createAt})`
      );
    obj.createdAt = new Date(obj.createdAt);
    const notification = new Notification(obj);
    return notification;
  }
}
