import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import SignIn from './sign/SignIn';
import CreateAccount from './sign/createAccount';
import Home from './Main/Home';
import Library from './Main/Library';
import HeadNav from './subComponent/HeadNav';
import Notification from './Main/Notifications';
import Menu from './Main/Menu';
import NewUserForm from './sign/NewUserForm';
import NavBar from './subComponent/NavBar';
import Profile from './Profile/Profile';
import StoryStore from './Library/StoryStore';
import SavedPosts from './Home/savedPosts/SavedPosts';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/' exact><SignIn/></Route>
          <Route path='/signup'><CreateAccount/></Route>
          <Route path='/home'><HeadNav click={'Home'}/><Home/></Route>
          <Route path='/stories'><NavBar click={'Stories'}/><Library/></Route>
          <Route path='/notifications'><HeadNav click={'Notifications'}/><Notification/></Route>
          <Route path='/menu'><HeadNav click={'Menu'} /><Menu/></Route>
          <Route path='/newuserform'><HeadNav/><NewUserForm/></Route>
          <Route path='/profile'><HeadNav/><Profile/></Route>
          <Route path='/saved'><HeadNav/><SavedPosts/></Route>
          <Route path='/storyStore/:title'><StoryStore/></Route> 
        </Switch>
      </div>

    </Router>
  );
}

export default App;
