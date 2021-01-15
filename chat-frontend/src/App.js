import "./App.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Chat from "./components/Chat/Chat";
import ProtectedRoute from "./components/Router/ProtectedRoute";
import { Provider } from "react-redux";
import store from "./store/store";
function App() {
  let createNotFound = () => {
    return <h2>404 Not Found</h2>;
  };
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            {/* <Route exact path="/" component={Chat} /> */}
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
    </Provider>
  );
}

export default App;
