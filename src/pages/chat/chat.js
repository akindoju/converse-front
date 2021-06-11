import { useEffect, useState } from 'react';
import './chat.css';
import io from 'socket.io-client';
import queryString from 'query-string';
import InfoBar from '../../components/InfoBar/InfoBar';
import Input from '../../components/Input/Input';
import Messages from '../../components/Messages/Messages';
import Header from '../../components/Header/Header';
import Users from '../../components/Users/Users';

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [activeUsers, setActiveUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  // const ENDPOINT = 'localhost:5000/';
  const ENDPOINT = 'https://akindoju-converse.herokuapp.com/';

  useEffect(() => {
    const { name, room } = queryString.parse(location.search); //to get data passed in as URL from Join component

    socket = io(ENDPOINT);
    //transports added because of cors issues
    // socket = io(ENDPOINT, { transports: ['websocket'] });

    setName(name);
    setRoom(room);

    socket.emit('join', { name: name, room: room }, (error) => {
      error && alert(error);
    });
  }, [ENDPOINT, location.search]);

  //getting messages
  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((messages) => [...messages, message]); //spreading in current messages and adding a new one to it
    });

    //get users in room
    socket.on('roomData', ({ users }) => {
      setActiveUsers(users);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      //setMessage is the callback fn from the serverside
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  };

  return (
    <div>
      <Header />
      <div className="outerContainer">
        <div className="chatContainer">
          <div className="container">
            <InfoBar room={room} />
            <Messages messages={messages} name={name} />
            <Input
              message={message}
              setMessage={setMessage}
              sendMessage={sendMessage}
            />
          </div>
          <Users activeUsers={activeUsers} />
        </div>
      </div>
    </div>
  );
};

export default Chat;
