import "./App.css";
import React from "react";

import data from "./data/data.json";
import Statistics from "./components/Statistics/Statistics";

import friends from "./data/friends.json";
import FriendList from "./components/FriendList/FriendList";

function App() {
  return (
    <div>
      <h1>Task-1</h1>
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />

      <h1>Task-2</h1>
      <FriendList friends={friends} />
    </div>
  );
}

export default App;
