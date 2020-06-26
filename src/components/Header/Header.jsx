import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
  debugger;
    return <header className={classes.header}>
    <img src='https://say-hi.me/wp-content/uploads/2018/07/mozilla-logos-1.png' />
    <div className={classes.loginBlock}>
        {props.isAuth 
        ? <div>{props.login} - <button onClick={ props.logout }>logout</button></div> :
        <NavLink to={'/login'}>Login</NavLink>}
    </div>
  </header>
}

export default Header;