import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    axios.get('https://api.memegen.link/images').then((res) => {
      setMemes(res.data);
    });
  }, []);

  return (
    <div>
      {memes.map((meme) => (
        <ul key={meme.id}>
          <li value={meme.id}>
            <img src={meme.url} alt="un_meme" />
          </li>
        </ul>
      ))}
    </div>
  );
}

export default App;
