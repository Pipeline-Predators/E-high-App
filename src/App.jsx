import React from "react";

import "./App.css";
import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";
import Sidebar from "./HomePage/Sidebar";
import Notification from "./Notification/Notification";
import Message from "./Message/Message";
import MainBody from "./HomePage/MainBody";
import Leaderboard from "./Leaderboard/Leaderboard";
import Footer from "./Footer/Footer";

import TakeQuiz from "./take_quiz/TakeQuiz";

function App() {
  // Change the state of the body when nav-items are clicked
  const [body, setBody] = React.useState(<MainBody />);

  return (
    <div>
      <Navbar
        homeClicked={() => setBody((prevBody) => <MainBody />)}
        leaderboardClicked={() => setBody((prevBody) => <Leaderboard />)}
        notificationClicked={() => setBody((prevBody) => <Notification />)}
        messageClicked={() => setBody((prevBody) => <Message />)}
      />
      <Header />
      <Sidebar />
      {body}
      <Footer />
    </div>
  );
}

export default App;
