import React from 'react';
import classes from './../Friends.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/friends/" + props.id;
    return <div className={classes.friend + ' ' + classes.active}>
        <img src={props.src} />
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}


export default DialogItem;