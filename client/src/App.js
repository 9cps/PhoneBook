import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PhoneBook from './pages/PhoneBook';
import AddFriends from './pages/AddFriends';
import EditFriends from './pages/EditFriends';

function App() {
  return (
      <Router>
        <Switch>
          <Route path='/' exact component={PhoneBook} />
          <Route path='/AddFriends' exact component={AddFriends} />
          <Route path='/EditFriends/:id' exact component={EditFriends} />
        </Switch>
      </Router>
  );
}

export default App;
