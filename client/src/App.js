import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FrontendRoutes from './routes/FrontendRoutes';
import BackendRoutes from './routes/BackendRoutes';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/admin" component={BackendRoutes} />
        <Route exact path="/" component={FrontendRoutes} />
      </Switch>
    </Router>
  );
}

export default App;

