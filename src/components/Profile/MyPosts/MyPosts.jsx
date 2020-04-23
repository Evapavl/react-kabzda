import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsElement =
        props.posts.map( p => <Post likesCount={p.likesCount} message={p.message} />)

    return <div className={classes.postsBlock}>
        <h3>My posts</h3>
        <div>
            <textarea></textarea></div>
        <div>
            <button>add</button>
        </div>
        <div>
            New post
        </div>
        <div className={classes.posts}>
            {postsElement}
        </div>
    </div>
}

export default MyPosts;