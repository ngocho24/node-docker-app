import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/messages')
      .then(res => setMessages(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Messages from PostgreSQL</h1>
      <ul>
        {messages.map(msg => (
          <li key={msg.id}>{msg.text}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;