import WebSocket from 'ws';
import { MyEmitter } from '../../helpers/typedEmitter.types';
import { Message } from './message';

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
        console.log('new socket connection, userId: ', userId);
        this.emit('newConnection', { id: userId });
      }
      ws.on('message', (data) => {
        const message = JSON.parse(data.toString());
        if (Message.isInbound(message.type)) {
          this.emit('inboundMessage', Message.fromJSON(data.toString()));
        }
      });
      ws.on('close', () => {
        console.log('socket disconnection, userId: ', userId);
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
