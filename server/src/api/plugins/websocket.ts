import fp from 'fastify-plugin';
import WebSocket from 'ws';
import { WebSocketService } from '../socket/websocket.service';

export default fp((fastify, opts: WebSocket.ServerOptions, next) => {
  try {
    const ws = new WebSocket.Server({
      ...opts,
      verifyClient: (info, next) => {
        if (!info.req.headers['authorization']) return next(false);
        next(true);
      },
    });
    const webSocketService = new WebSocketService(ws);
    fastify.decorate('websocket', webSocketService).addHook('onClose', () => {
      ws.close();
    });
    console.log('WebSocket is initialized successfully');
  } catch (err) {
    return next(err);
  }

  next();
});
