import React from 'react';
import './PostDetails.css';
import { useState, useEffect } from 'react';
import Comments from '../Comments/Comments.js';
import {
  useParams
} from "react-router-dom";

const PostDetails =()=>{
    const {postid} = useParams()
    const [Post, setPost] = useState([]);
    useEffect( ()=>{
        const postUrl = `https://jsonplaceholder.typicode.com/posts/${postid}`
        fetch(postUrl)
        .then(res => res.json())
        .then(data => setPost(data))
        
    },[])
    const [comments, setComments] = useState([]);
    useEffect( ()=>{
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postid}`)
        .then(res => res.json())
        .then(data => setComments(data))
        
    },[])
    console.log(comments)
    return(
             <div className="postDetail">
                <div className="post">
                    <div className="in-blk">
                        <h3>Post No: {postid}</h3>
                        <h2>Post Title: {Post.title}</h2>
                    </div>
                    <img src={`https://randomuser.me/api/portraits/women/${postid}.jpg`}/>
                    <p><b>Caption:</b> {Post.body}</p>
                </div>
                <div className="commentSection">
                <h1> Comments:{comments.length}</h1>
                {
                   comments.map( data => <Comments name={data.name} email={data.email} body={data.body} id={data.id}></Comments>)
                }
                </div>
            </div>
    
    )

}

export default PostDetails;