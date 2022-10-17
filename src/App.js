import logo from './logo.svg';
import './App.css';
import './components/Banner.js'  //traigo todo lo que hay en banner
import HelloWorld from './components/Banner';
import {Banner as Saludo} from './components/Banner'
import Audio from './components/Audio/Audio';
import Video from './components/Video/Video';
import Imagen from './components/Imagen/Imagen';
import rct from './assets/img/react.svg'
import vid from './assets/vid/dancing.mp4'
import aud from './assets/aud/burn.mp3'


function App() {
  return (
    <div className="App">
      <Saludo></Saludo>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Audio aud={aud}/>
        <Video vid={vid}/>
        <Imagen fuente={rct}/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

HelloWorld()

export default App;
