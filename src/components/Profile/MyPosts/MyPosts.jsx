import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return <div>
      my posts
      <div>
        new post
      </div>
      <div className={classes.posts}>
        <Post like='15' message='Hi, how are you?'/>
        <Post like='20' message="Its my first post"/>
      </div>
    </div>
}

export default MyPosts;