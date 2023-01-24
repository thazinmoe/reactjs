import React from "react";
import App from "../App";
import About from "./pages/About";
import Blog from "./pages/Blog";
import NavigationBar from "./NavigationBar";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import NoMatch from "./pages/NoMatch";

export default function Root() {
  const routes = [
    { path: "/", name: "Home", Component: App, exact: true },
    { path: "/about", name: "About", Component: About, exact: false },
    { path: "/contact", name: "Contact", Component: Contact, exact: false },
    { path: "/blog", name: "Blog", Component: Blog, exact: true },
    { path: "/blog/:id", name: "Post", Component: BlogPost, exact: false },
    { path: "*", name: "No Match", Component: NoMatch, exact: false },
  ];

  return (
    <BrowserRouter>
      <div className="todo-app-container">
        <NavigationBar />
        <div>
          <Switch>
            <Route exact path="/">
              <App />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route exact path="/blog">
              <Blog />
            </Route>
            <Route path="/blog/:id">
              <BlogPost />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}
