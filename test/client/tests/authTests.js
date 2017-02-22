import React from 'react';
import { ControlLabel, FormControl } from 'react-bootstrap';
import { connect, Provider } from 'react-redux';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
//hold off untl the bookshelf refactor


/*=================================Signup==================================*/


/*on signup, should be a post request to /api/signup*/

/*on signup, the newUser function from the user controller should be called*/

/*on signup, the user's password should be hashed*/

/*on signup, user should be redirected to login*/

/*axios calls should have catch block with error handling*/

/*==================================Login===================================*/

/*should use local auth strategy*/

/*should validate password with brcypt.compare*/

/*all subsequent requests should have a req.user property*/

/*should serialze user id on page transfer, should deserialize on page transfer*/

/*should make a get request to /api/login*/

/*should redirect to the form*/

/*should update redux store with login id/username*/

/*axios calls should have catch block with error handling*/

/*==================================Logout===================================*/


/*should call .logout and .session.destroy*/

/*should redirect user to login page*/

/*session should no longer contain object with username property*/

/*axios calls should have catch block with error handling*/

/**/

/*===============================Auth Middleware===============================*/


/*should redirect a user to login if not authorized*/

/*if user is authorized, should redirect to next page upon link selection*/

/*if user is logged in current state of store should have authorized username defined*/

/*if user is not logged in, current state of store's auth-user value should be undefined*/