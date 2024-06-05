import logo from './logo.svg';
import './App.css';
import './Welcome.jsx';
import NotificationList from './chapter_06/NotificationList.jsx';
import Counter from './Counter.jsx';
import FocusButton from './FocusButton.jsx';
import Accommodate from './chapter_07/Accommodate.jsx';
import AttendanceBook from './chapter_10/AttendanceBook.jsx';
import SignUp from './chapter_11/SignUp.jsx';
import NameForm from './chapter_11/NameForm.jsx';
import TemperatureInput from './chapter_12/TemperatureInput.jsx';
import Calculator from './Calculator.jsx';
import Card from './chapter_13/Card.jsx';
import ProfileCard from './chapter_13/ProfileCard.jsx';
import WelcomeDialog from './chapter_13/WelcomeDialog.jsx';
import SplitPane from './chapter_13/SpliePane.jsx';
function App() {
  return (
    <div className="App">
      {
        <SplitPane
        left={<Contacts/>}
        right={<Chat/>}
        />
        // <NotificationList />
      /* <header className="App-header">
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
    </div>
  );
}

export default App;
