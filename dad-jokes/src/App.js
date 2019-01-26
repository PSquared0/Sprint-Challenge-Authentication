import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import "./App.css";

import Jokes from "./jokes/Jokes";
import Signin from "./authenticate/Signin";

const Home = props => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};



class App extends Component {
  
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <NavLink className="inactive" activeClassName="active" to="/" exact>
              Home
            </NavLink>
            {/* &nbsp;|&nbsp;
            <NavLink to='/signin'>
            Sign In
            </NavLink> */}
            &nbsp;|&nbsp;
            <NavLink to="/jokes">Jokes</NavLink>
             {/* &nbsp;|&nbsp;
            <NavLink to='/signin'>
            Sign In
            </NavLink> */}
            &nbsp;|&nbsp;
            <NavLink to="/signin">Signin</NavLink>
            &nbsp;|&nbsp;
            <button onClick={this.signout}> Signout </button>
          </nav>
          <main>
            <Route path="/" component={Home} exact />
            {/* <Route path='/signin' component={Signin} exact></Route> */}
            <Route path="/jokes" component={Jokes} exact />
            <Route path="/signin" component={Signin} exact />
          </main>
        </header>
      </div>
    );
  }
  signout = event => {
    localStorage.removeItem('jwt');

    }
}



export default App;
