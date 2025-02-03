// import logo from '../src/assets/svg/logo.svg';
import ChatComponent from './components/ChatComponent';
// import '../src/styles/App.css';
import {ToastContainer} from 'react-toastify';
import LoginComponent from './components/LoginComponent';
import RegistrationComponent from './components/RegistrationComponent';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header> */}
      <ToastContainer/>
      <LoginComponent name="krish"/>
      <RegistrationComponent/>
      {/* <ChatComponent/> */}

    </div>
  );
}

export default App;
