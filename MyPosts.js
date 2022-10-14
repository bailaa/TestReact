import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements =
        props.postsData.map(post => <Post message={post.message} likeCounter={post.likeCounter}/>)
    return (
            <div className={classes.myPostBlock}>
                <h3>My posts</h3>
                <div>
                    New post
                    <div>
                        <textarea></textarea>
                    </div>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
                <div className={classes.posts}>
                    {postsElements}
                </div>
            </div>
    )
}

export default MyPosts;