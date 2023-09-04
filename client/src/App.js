import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FrontendRoutes from './routes/FrontendRoutes';
import BackendRoutes from './routes/BackendRoutes';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={FrontendRoutes} />
        <Route path="/admin" component={BackendRoutes}/>
      </Switch>
    </Router>
  );
}

export default App;

