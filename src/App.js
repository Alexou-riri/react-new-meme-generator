import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [memes, setMemes] = useState([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    axios.get('https://api.memegen.link/templates').then((res) => {
      setMemes(res.data);
    });
  }, []);

  const selectMeme = `https://api.memegen.link/images/${value}/`;

  return (
    <div>
      <img src={selectMeme} alt="un_meme" />
      <select
        onChange={() => {
          const changeMeme = document.getElementsById();
        }}
      >
        {memes.map((meme) => (
          <option key={meme.id} value={meme.id}>
            {meme.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default App;
