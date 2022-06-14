import React, {useState} from 'react';
import './App.css';
import Navbar from './components/navbar/navbar.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import PrivateRoute from './pages/PrivateRoute'
import Home from './pages/Home';
import Service from './pages/Service'
import Market from './pages/Market'
import Login from './pages/Login'
import { signIn } from './jsonData/auth';
import Profile from '../src/pages/Profile';
import AuthRoute from '../src/pages/AuthRoute';
import Tutorial from './pages/Tutorial';
import Register from './pages/Register';
import LoginPost from './pages/LoginPost';
import Mypage from './pages/Mypage'
import Logout from './pages/Logout';
import Contact from './pages/Contact';
import About from './pages/About'
import HomeSub from './pages/HomeSub';
import NotFound from './pages/NotFound';
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser';
import User from './components/users/User';
import DataInfo from './pages/DataInfo';
import AddData from './components/data/AddData';
import Data from './components/data/Data'
import AddNotice from './components/notice/AddNotice';
import Notice from './components/notice/Notice';
import NoticeB from './pages/Notice';
import AddQNA from './components/qna/AddQNA';
import QNA from './components/qna/QNA';
import EditNotice from './components/notice/EditNotice';
import Question from './pages/Question';


function App() {
  const [user, setUser] = useState(null);
  const authenticated = user != null;

  const login = ({ email, password }) => setUser(signIn({ email, password }));

  return (
    <div>

    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/mypage' component={Service} />
        <Route path='/market' component={Market} />

        <Route path='/register' component={Register} />
        <Route path='/loginpost' component={LoginPost} />
        <PrivateRoute path='/mypage' component={Mypage} />
        <PrivateRoute path='/logout' component={Logout} />
        <Route
            path="/login"
            render={props => (
              <Login authenticated={authenticated} login={login} {...props} />
            )}
        />
        <AuthRoute
            authenticated={authenticated}
            path="/profile"
            render={props => <Profile user={user} {...props} />}
          />
          <Route path='/tutorial' component={Tutorial}/>
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/users/add" component={AddUser} />
          <Route exact path="/users/edit/:id" component={EditUser} />
          <Route exact path="/post/edit/:id" component={EditNotice} />
          <Route exact path="/users/:id" component={User} />
          <Route exact path="/homesub" component={HomeSub} />
          <Route exact path="/datainfo" component={DataInfo} />
          <Route exact path="/dashboard/add" component={AddData} />
          <Route exact path="/dashboard/:id" component={Data} />
          <Route exact path="/post/add" component={AddNotice} />
          <Route exact path="/post/:id" component={Notice} />
          <Route exact path="/post" component={NoticeB} />
          <Route exact path="/qna/add" component={AddQNA} />
          <Route exact path="/qna/:id" component={QNA} />
          <Route exact path ='/qna/list' component={Question} />

          <Route component={NotFound} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;