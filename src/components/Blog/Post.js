import {React, useState, useEffect} from 'react'
import './posts.css'

function Post(props) {
    const [h, setH] = useState(1080);
    const handleWindowonChange = function () {
        setH(window.innerWidth);
    }
    window.addEventListener('resize', handleWindowonChange);

    function getTruncatedWordNumber() {
        if (h > 1080) {
            return 200;
        } else if (h > 800) {
            return 150;
        } else if (h > 600) {
            return 100;
        } else {
            return 50;
        }
    }

    return (
        props.article ?
        (<div className="post-container">
            <div className="post-image"
                style={{ backgroundImage: `url(${props.article.thumbnail})` }} />
            <hr />
            <a href={props.article.link}><h5>{props.article.title}</h5></a>
            <p>{props.article.description.replace(/<\/?[^>]+(>|$)/g, "").replace(props.article.title, "").substring(0, 50) + " ..."}</p>
        </div>)
        :
        null
    )
}

export default Post
