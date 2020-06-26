import React from 'react';
import classes from './Friends.module.css';
import FriendItem from "./FriendItem/FriendItem";

const Friends = (props) => {

    let friendsElements = props.friends.map(f => <FriendItem name={f.name} id={f.id} src={f.src}/>);

    return (
        <div className={classes.friends}>
            Friends
            <div className={classes.friendsElements}>
                {friendsElements}
            </div>
        </div>
    )
}

export default Friends;