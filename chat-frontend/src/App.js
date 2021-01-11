import "./App.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Chat from "./components/Chat/Chat";
function App() {
  let createNotFound = () => {
    return <h2>404 Not Found</h2>;
  };
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Chat} />
          {/* <Route
            render={() => {
              <h2>404 Page Not Found</h2>;
            }}
          /> */}
          <Route render={createNotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
