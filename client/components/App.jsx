import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Will'
    };
  }
  render() {
    setTimeout(() => {
      this.setState({ name: 'BOB' });
    }, 5000);
    return (
      <div className="container">
        <nav className="navbar navbar-toggleable-md navbar-light">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarItems"
            aria-controls="navbarItems"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="./index.html">
            <img
              src="./public/images/logo.png"
              width="45"
              height="32"
              className="d-inline-block align-center"
              alt="Make Recipe Logo"/>
            <span id="site-name">More Recipes</span>
          </a>

          <div className="collapse navbar-collapse" id="navbarItems">
            <ul className="navbar-nav mr-auto text-center">
              <li className="nav-item active">
                <a className="nav-link" style={{ color: 'skyblue' }} href="./index.html">Home<span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./my_recipes.html">Create Recipe</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./recipes_list.html">View Recipes</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./signin.html">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./signup.html">Register</a>
              </li>
            </ul>
            <form className="form-inline form-group my-2 my-lg-0">
              <div className="input-group">
                <input
                  className="form-control form-control-sm"
                  type="text"
                  placeholder="search recipe by name"/>
                <span className="input-group-btn">
                  <button type="submit" className=" btn btn-md btn-outline-info">
                    <i className="fa fa-search"></i>
                  </button>
                </span>
              </div>
            </form>
          </div>
        </nav>
        {this.state.name}
        <h1>Hello World!</h1>
      </div>
    );
  }
}