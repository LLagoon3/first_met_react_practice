import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Libaray from './chapter_03/Library';
import Clock from './chapter_04/Clock';
import CommentList from './chapter_05/Comment_list';
import NotificationList from './chapter_06/Notification_list';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Libaray />
//   </React.StrictMode>,
//   document.getElementById(root)
// );


// setInterval(() => {
//   ReactDOM.render(
//     <React.StrictMode>
//       <Clock />
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
// }, 1000);

ReactDOM.render(
  <React.StrictMode>
    <NotificationList />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
