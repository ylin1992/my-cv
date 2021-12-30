import React from 'react'

function ArticleLists(props) {
    function handleDeleteOnClick(event) {
        props.handleDelete(event.target.name)
    }

    return (
        <div>
        {props.articles && props.articles.map( (article) => {
            return (
                <div key={article._id}>
                    <h1>{article.title}</h1>
                    <p>{article.content}</p>
                    <button onClick={handleDeleteOnClick} name={article._id}>Delete</button>
                </div>
            )
        })
        }
        </div>
    )
}

export default ArticleLists
