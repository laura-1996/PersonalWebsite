import React from "react";
import { Route, Switch } from "react-router";
import About from "./about";
import Blog from "./blog";
import Contacts from "./contacts";
import Post from "./post";

export default function Body() {
  return (
    <Switch>
      <Route path="/" exact component={Blog} />
      <Route path="/about" component={About} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/post/:slug" component={Post} /> 
    </Switch>
  );
}
