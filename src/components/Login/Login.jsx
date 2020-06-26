import React from 'react';
import {Field, reduxForm} from "redux-form";
import { Input } from '../FormsControls/FormsControls';
import { required } from '../Validator/Validator';
import { connect } from 'react-redux';
import {login} from './../../redux/auth-reduce'
import { Redirect } from 'react-router-dom';
import classes from './../Header/Header.module.css';
import {createFields} from './../FormsControls/FormsControls'

const LoginForm = ({handleSubmit, error}) => {
    return <form onSubmit={handleSubmit}>
       {createFields( [required], Input, 'email', 'Login')}
       {createFields( [required], Input, 'password', "Password", {type:"password"} )}
       {createFields( [], Input, 'rememberMe', null, {type:"checkbox"}, "remember me" )}
            
            {error &&
                <div className={classes.loginError} >{error}</div>}
            <div>
                <button>Login</button>
            </div>
    </form>
}

const LoginReduxForm = reduxForm({form:'login'})(LoginForm)


const Login = ({login, isAuth, ...props} ) => {

    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe);
        console.log(formData)
    }
    if(isAuth){
        return <Redirect to={"/profile"} />
    }
    
    return (
   <div>
    <h1>Login</h1>
    <LoginReduxForm onSubmit={onSubmit} />
    </div>
    )
}
const mapStateToProps = (state) => ({
isAuth: state.auth.isAuth
})
export default connect( mapStateToProps, {login} )(Login);