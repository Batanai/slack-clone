import React from "react";
import "./App.css";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./chat/Chat";
import Login from "./login/Login";
import { useStateValue } from "./state/StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                  <h1>Welcome</h1>
                </Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
