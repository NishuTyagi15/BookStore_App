import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Switch>
          <Route path="/" component={Dashboard} />
        </Switch>
      </Router> */}
      <Header />
    </div>
  );
}

export default App;
