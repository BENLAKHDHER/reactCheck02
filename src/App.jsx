import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PlayersList from "./components/PlayersList";

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center", marginTop: "1rem" }}>FIFA Player Cards</h1>
      <PlayersList />
    </div>
  );
}

export default App;