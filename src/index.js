import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Library from './chapter_03/Library';
import Clock from './chapter_04/Clock';
import CommentList from './chapter_05/CommentList';
import NotificationList from './chapter_06/NotificationList';
import Counter from './Counter';
import FocusButton from './FocusButton';
import Accommodate from './chapter_07/Accommodate';
import AttendanceBook from './chapter_10/AttendanceBook';
import SignUp from './chapter_11/SignUp';
import NameForm from './chapter_11/NameForm';
import TemperatureInput from './chapter_12/TemperatureInput';
import Calculator from './Calculator';
import Card from './chapter_13/Card';
import ProfileCard from './chapter_13/ProfileCard';
import WelcomeDialog from './chapter_13/WelcomeDialog';
import SplitPane from './chapter_13/SpliePane';
import DarkOrLight from './chapter_14/DarkOrLight';
import MainPage from './chapter_15/MainPage.jsx';
import Blocks from './chapter_15/Blocks.jsx';

ReactDOM.render(
  <React.StrictMode>
    <Blocks />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
