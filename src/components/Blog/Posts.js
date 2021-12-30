import axios from 'axios';
import {React, useState, useEffect} from 'react'
import Post from './Post.js'
import './posts.css'
import { css } from "@emotion/react";
import BeatLoader from "react-spinners/BeatLoader";

function Posts() {
    const URL = process.env.REACT_APP_MEDIUM_URL;
    // console.log(URL);

    const override = css`
        display: block;
        margin: 0 auto;
        border-color: red;
        margin: 2em;
        `;

    const [atricles, setArticles] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect( () => {
        axios.get(URL)
        .then( res => {
            setArticles(res.data.items);
            setIsLoaded(true);
            // console.log(atricles);
            // // console.log(res.data.items);
        })
        .catch( err => {
            console.log(err);
        })
    }, []);

    return (
        
        isLoaded ? (
        <div className="posts-container grid-layout">
            { atricles.map(article => {
                return (
                    <>
                    <Post article={article}/>
                    {/* <Post article={article}/> */}
                    </>
                    );
                }
            )
            }
        </div>
        )
        :
        (
            <div class="loading">
                <BeatLoader color="#406882" loading={!isLoaded} css={override} size={10} />
                <h1 style={{color: "#406882"}}>Loading...</h1>
            </div>
        )
       
    )
}

export default Posts
