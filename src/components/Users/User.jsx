import React from 'react';
import classes from './users.module.css';
import userPhoto from "../../img/home.png";
import {NavLink} from "react-router-dom";


let User = ({user, ...props}) => {
   
    return <div>
        <span>
            <div>
                <NavLink to={'/profile/' + user.id}>
                <img className={classes.photos} src={user.photos.small != null ? user.photos.small : userPhoto}/>
          </NavLink>
            </div>
            <div>
                {user.followed
                    ? <button disabled={props.followingInProgress.some(id => id === user.id)}
                        onClick={() => {
                            props.unfollow(user.id)

                    }}>Unfollow</button>
                    : <button disabled={props.followingInProgress.some(id => id === user.id)}
                        onClick={() => {
                            props.follow(user.id)
                    }}>Follow</button>}

            </div>
        </span>
                <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </span>
                <span>
                <div>
                    {/* {user.location.city} */}
            </div>
                <div>
                    {/* {user.location.country} */}
                    </div>
                </span>

            </div>
    
}


export default User;