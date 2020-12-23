import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import  Profile  from './about';
import Goal from './blog';
import Contacts from './contacts';
import Home from './home';
import Counter from './counter';
import Header from './header';
import Body from './body';



export default function NavBar() {
  return (
    <Router>
        <div className='App'>
        <Header />
        <Body />
        </div>
    </Router>
  );
}






