import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SignupForm extends Component {
    render() {
        return (
            // <!--Form Section Start-->
            <div className="col-8 col-sm-8 col-md-8 col-lg-8">
                <h2>Sign Up</h2>
                <p className="lead">Already have a More-Recipes account? <Link to="/api/v1/user/signin">Sign In</Link>
                </p>
                <form role="form" method="post" className="pb-2">
                    <div className="form-group">
                        <label htmlFor="user">Full name</label>
                        <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                            <div className="input-group-addon">
                                <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                            </div>
                            <input
                                type="text"
                                className="form-control form-control-sm"
                                id="fullname"
                                placeholder="enter full name"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="user">Username</label>
                        <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                            <div className="input-group-addon">
                                <i className=" fa fa-user-circle-o " aria-hidden="true "></i>
                            </div>
                            <input
                                type="text"
                                className="form-control form-control-sm"
                                id="username"
                                placeholder="enter username"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                            <div className="input-group-addon">
                                <i className=" fa fa-envelope " aria-hidden="true "></i>
                            </div>
                            <input
                                type="email"
                                className="form-control form-control-sm"
                                id="email"
                                placeholder="enter email"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                            <div className="input-group-addon">
                                <i className=" fa fa-lock " aria-hidden="true "></i>
                            </div>
                            <input
                                type="password"
                                className="form-control form-control-sm"
                                id="password"
                                placeholder="enter password"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="repassword">Confirm password</label>
                        <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                            <div className="input-group-addon">
                                <i className=" fa fa-lock " aria-hidden="true"></i>
                            </div>
                            <input
                                type="password"
                                className="form-control form-control-sm"
                                id="repassword"
                                placeholder="re-enter password"/>
                        </div>
                    </div>
                    <p className="lead">By signing up you are agreeing to these <Link to="">terms and conditons</Link>
                    </p>
                    <button type="submit" className="btn btn-outline-success">Sign Up</button>
                </form>
            </div>
        // <!--Form Section End-->
        );
    }
}