import React from 'react';
import './App.css';
import Posts from './components/Posts/Posts.js';
import PostDetails from './components/PostDetails/PostDetails.js';
import NotFound from './components/NotFound/NotFound.js';
import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




function App() {
    const [Post, setPost] = useState([]);
    useEffect( ()=>{
        const postUrl = 'https://jsonplaceholder.typicode.com/posts/'
        fetch(postUrl)
        .then(res => res.json())
        .then(data => setPost(data))
        
    },[])
    
  return (
                <Router>
                    <Switch>
                        <Route exact path="/">
                            {
                                Post.map(Post => <Posts title={Post.title} body={Post.body} No={Post.id}></Posts>)
                              }
                        </Route>
                        <Route path="/:postid">
                                    <PostDetails/>
                        </Route>
                        <Route path="*">
                            <NotFound/>
                        </Route>
                    </Switch>
                </Router>
  );
}

export default App;
