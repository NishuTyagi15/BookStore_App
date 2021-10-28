import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import BooksDisplay from './Pages/BooksDisplay/BooksDisplay';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/booksdisplay" component={BooksDisplay} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
