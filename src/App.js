import './App.css';
import Navbar from './components/layout/Navbar'
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'


function App() {
  return (
    <Router>
    <div className="App">
  <Navbar></Navbar>
  <Switch>
    <Route exact path='/' component={Home}></Route>
    <Route exact path='/about' component={About}></Route>
    <Route exact path='/contact' component={Contact}></Route>
    <Route exact path='/users/add' component={AddUser}></Route>
    <Route exact path='/users/edit/:id' component={EditUser}></Route>
    <Route exact path='/users/:id' component={User}></Route>
    <Route component={NotFound}></Route>
  </Switch>
    </div>
    </Router>

  );
}

export default App;
