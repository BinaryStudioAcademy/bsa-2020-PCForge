import WebSocket from 'ws';

export class WebSocketService {
  private clients: Map<number, WebSocket>;
  constructor(private ws: WebSocket.Server) {
    ws.on('connection', async (ws, request) => {
      const credentials = request.headers.authorization;
      const userId = await this.authorize(credentials);
      if (!userId) ws.close();
      else this.clients.set(userId, ws);
    });
  }

  private async authorize(credentials: string): Promise<number | null> {
    console.log(credentials);
    return 1; //mocked id
  }

  public async sendMessage(userId: number, message: string): Promise<void> {
    if (this.clients.has(userId)) return;
    const client = this.clients.get(userId);
    client.send(message, (err) => {
      if (err) console.error(err);
    });
  }
}
