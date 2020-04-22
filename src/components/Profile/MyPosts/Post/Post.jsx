import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
      <div className={classes.item}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdVbZ_zN3n3pcaP98W_NSTQUciXzn6JTgUk2CKoKcuWjQX-BM1&usqp=CAU" />
          {props.message}
          <div>
    <span>{props.like} like</span>
          </div>
        </div>
    )   
}

export default Post;