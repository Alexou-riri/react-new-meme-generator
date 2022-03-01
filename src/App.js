import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { saveAs } from 'file-saver';

function App() {
  const [memes, setMemes] = useState([]);
  const [value, setValue] = useState('aag');
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');

  useEffect(() => {
    axios
      .get('https://api.memegen.link/templates')
      .then((res) => {
        setMemes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const createMeme = `https://api.memegen.link/templates/${value}/${topText}/${bottomText}`;

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
      <div className={'App'}>
        <header className={'App-header'}>
          {/* Header display only elements*/}
          <h1>{'Meme generator'}</h1>
          <h2>{' Have fun ! '}</h2>
        </header>
      </div>

      <div className={'memeGenerator'}>
        <select
          label={`Meme template`}
          onChange={onChangeValue}
          onKeyPress={() => {
            setValue(memes.id);
          }}
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
        <img src={createMeme} alt={'un_meme'} data-test-id={'meme-image'} />
      </div>
      <div className={'inputs'}>
        <label htmlFor={`Top text`}>{`Top text : `}</label>
        <input
          name={'Top text'}
          id={'Top text'}
          value={topText}
          onChange={onChangeTopText}
        />
        <label htmlFor={`Bottom text`}>{`Bottom text : `}</label>
        <input
          name={'Bottom text'}
          id={'Bottom text'}
          value={bottomText}
          onChange={onChangeBottomText}
        />
        <button onClick={() => saveAs(createMeme, 'meme.jpg')}>
          {'Download'}
        </button>
      </div>
    </>
  );
}

export default App;
