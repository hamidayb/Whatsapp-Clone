import {useEffect, useState} from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Chat from './components/Chat/Chat';
import Pusher from 'pusher-js';
import axios from './axios';
import './App.scss';

function App() {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    axios.get('/messages/sync')
    .then(response => {
      setMessages(response.data);
    })
  }, [])

  useEffect(() => {
    var pusher = new Pusher('91762b21848f61fff515', {
      cluster: 'eu'
    });

    var channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      setMessages([...messages, newMessage])
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages])


  return (
    <div className="app">
      <div className="app__body">
        <Sidebar></Sidebar>
        <Chat messages={messages}></Chat>
      </div>
    </div>
  );
}

export default App;
