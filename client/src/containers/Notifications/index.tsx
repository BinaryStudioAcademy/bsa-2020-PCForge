import React from 'react';

const WithNotifications: React.FC = ({ children }): JSX.Element => {
  React.useEffect(() => {
    console.log(process.env);
    if (!process.env.REACT_APP_WS_SERVER_ADDRESS) {
      console.error(`Unable to connect to WebSocket, ws address is not set in .env`);
      return;
    }
    console.log('WS ATTEMPT TO CONNECT');
    const ws = new WebSocket(process.env.REACT_APP_WS_SERVER_ADDRESS, '1');
    ws.onopen = () => {
      console.log('WebSocket opened');
    };
    ws.onmessage = (messageEvent) => {
      const { data, source } = messageEvent;
      console.log(data);
    };
  });
  return <>{children}</>;
};
export default WithNotifications;
