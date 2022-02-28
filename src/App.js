import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [memes, setMemes] = useState([]);
  const [value, setValue] = useState('aag');
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');

  useEffect(() => {
    axios.get('https://api.memegen.link/templates').then((res) => {
      setMemes(res.data);
    });
  }, []);

  const createMeme = `https://api.memegen.link/images/${value}/${topText}/${bottomText}`;

  const onChangeValue = (e) => {
    setValue(e.currentTarget.value);
  };
  const onChangeTopText = (e) => {
    setTopText(e.currentTarget.value);
  };

  const onChangeBottomText = (e) => {
    setBottomText(e.currentTarget.value);
  };

  return (
    <>
      <div className="App">
        <header className="App-header">
          {/* Header display only elements*/}
          <h1>Meme generator</h1>
          <h2> Have fun ! </h2>
        </header>
      </div>
      <div className="MemeGenerator">{/* <MemeGenerator /> */}</div>
      <div>
        <select
          onChange={onChangeValue}
          // const changeMeme = document.getElementsById();
          // const selectedValue = changeMeme.value;
          // setValue(selectedValue);
          // }}
        >
          {memes.map((meme) => {
            return (
              <option key={meme.id} value={meme.id}>
                {meme.name}
              </option>
            );
          })}
        </select>
        <img src={createMeme} alt="un_meme" />
      </div>
    </>
  );
}

export default App;
