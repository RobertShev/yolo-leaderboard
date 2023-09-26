import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const useSocket = <T extends Partial<T>>(URL: string): [boolean, T?] => {
  const [message, setMessage] = useState<T>();
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const socket = io(URL);
    const onConnect = () => {
      setIsConnected(true);
    };

    const onDisconnect = () => {
      setIsConnected(false);
    };

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('userData', setMessage);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('userData', setMessage);
    };
  }, [URL]);

  return [isConnected, message];
};

export default useSocket;
