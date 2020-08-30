import WebSocket from 'ws';
import { MyEmitter } from '../../helpers/typedEmitter.types';

export class WebSocketService extends MyEmitter<{ newConnection: { id: number } }> {
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
  INITIAL_NOTIFICATIONS,
  NEW_NOTIFICATION,
}

export class Message {
  constructor(private text: string, private type: MessageType = MessageType.NEW_NOTIFICATION) {}
  public toString(): string {
    return JSON.stringify({ type: this.type, text: this.text });
  }
}
