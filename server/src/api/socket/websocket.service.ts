import WebSocket from 'ws';
import { MyEmitter } from '../../helpers/typedEmitter.types';

// eslint-disable-next-line @typescript-eslint/ban-types
export class WebSocketService extends MyEmitter<{ newConnection: { id: number }; inboundMessage: Message }> {
  private clients: Map<number, WebSocket> = new Map();
  constructor(private ws: WebSocket.Server) {
    super();
    ws.on('connection', async (ws, request) => {
      const credentials = request.headers['sec-websocket-protocol'];
      const userId = await this.authorize(credentials);
      if (!userId) ws.close();
      else {
        this.clients.set(userId, ws);
        this.emit('newConnection', { id: userId });
      }
      ws.on('message', (data) => {
        const message = JSON.parse(data.toString());
        if (inboundMessageTypes.includes(message.type)) {
          this.emit('inboundMessage', Message.fromJSON(data.toString()));
        }
      });
      ws.on('close', () => {
        console.log(this.clients.keys.length);
        this.clients.delete(userId);
      });
    });
  }

  private async authorize(credentials: string | string[]): Promise<number | null> {
    if (typeof credentials === 'string') return parseInt(credentials, 10);
    else return null;
  }

  public async sendMessage(userId: number, message: Message): Promise<void | never> {
    if (!this.clients.has(userId)) return;
    const client = this.clients.get(userId);
    client.send(message.toString(), (err) => {
      if (err) {
        console.error(err);
        throw err;
      }
    });
  }
}

export enum MessageType {
  INITIAL_NOTIFICATIONS = 'INITIAL_NOTIFICATIONS',
  NEW_NOTIFICATION = 'NEW_NOTIFICATION',
  DELETE_NOTIFICATION = 'DELETE_NOTIFICATION', //inbound message
}

const inboundMessageTypes = [MessageType.DELETE_NOTIFICATION];

export class Message {
  constructor(
    public readonly payload: string | Record<string, unknown>,
    public readonly type: MessageType = MessageType.NEW_NOTIFICATION
  ) {}
  public toString(): string {
    return JSON.stringify({ type: this.type, payload: this.payload });
  }
  public static fromJSON(json: string): Message {
    const obj = JSON.parse(json);
    if (typeof obj.type !== 'string' || !Object.keys(MessageType).find((type) => type === obj.type))
      throw new Error(`Inbound message type must be string MessageType, got: [${typeof obj.type}](${obj.type})`);
    const message = new Message(obj.payload, obj.type);
    return message;
  }
}
