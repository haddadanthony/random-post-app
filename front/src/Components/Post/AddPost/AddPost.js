import React from 'react'
import classes from './AddPost.module.css';

const AddPost = (props) => {
    return (
        <div className={classes.container}>
            <h2>Add Your Post</h2>
            <form onSubmit={e => props.submit(e)}>
                <div className={classes.fields}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" onChange={e => props.change(e)} value={props.nameValue} />
                </div>
                <div className={classes.fields}>
                    <label htmlFor="post">Your Post</label>
                    <textarea name="post" cols="30" rows="10" onChange={(e) => props.change(e)} value={props.postValue} />
                </div>
                <input type="submit" value="Post"/>
            </form>
        </div>
    )
}

export default AddPost;
