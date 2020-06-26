import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import { required, maxLengthCreator } from '../../Validator/Validator';
import { Textarea } from '../../FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10);

const PostsForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea}
             name={'newPostText'}
              placeholder={'post text'}
              validate={[required, maxLength10]}
              />
        </div>
        <div>
            <button >add post</button>
        </div>
    </form>
}

const PostsReduxForm = reduxForm({form:'newPostText'})(PostsForm)

const MyPosts = (props) => {

    let postsElement =
        props.posts.map(p => <Post key={p.id} likesCount={p.likesCount} message={p.message}/>)

    //let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }
    


    return <div className={classes.postsBlock}>
        <h3>My posts</h3>
        <PostsReduxForm onSubmit={onAddPost}/>
        {/*<div>
            <textarea ref={newPostElement}
                      value={props.newPostText}
                      onChange={onPostChange}/>
        </div>
        <div>
            <button onClick={onAddPost}>add</button>
        </div>*/}
        <div>
            New post
        </div>
        <div className={classes.posts}>
            {postsElement}
        </div>
    </div>
}


export default MyPosts;