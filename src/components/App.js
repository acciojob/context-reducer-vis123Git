import React from "react";

function App() {
  return (
    <div>
      <h1 id="current-user">
        Current user:{"ROhan"}, isAuthenticated: {"NO"}
      </h1>
      <button id="login-btn">Login</button>
      <button id="signout">Signout</button>
      <input type="text" id="shopping-input"></input>
      <button id="clear-list">Clear List</button>
    </div>
  );
}

export default App;
