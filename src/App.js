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
function App() {
  return (
    <div className="App">
      {
        <NameForm/>
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
