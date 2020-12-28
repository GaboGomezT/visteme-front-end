import Feed from './components/Feed.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login.js';
import Signup from './components/Signup.js';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/feed" component={Feed} />
      </Switch>
    </Router>
  );
}

export default App;
