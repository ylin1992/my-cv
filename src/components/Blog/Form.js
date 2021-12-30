import React from 'react'

function Form(props) {

    function handleOnChange(event) {
        props.contentOnChange(event.target)
    }


    return (
        <div>
            <form action="/" method="POST">
                <label for="title">Title:</label>
                <input onChange={handleOnChange} id="title" placeholder="Enter the title" name="title"></input>
                <label for="content">Content:</label>
                <textarea onChange={handleOnChange} rows="3" id="content" placeholde="Enter some content" name="content"></textarea>
                <button onClick={props.addArticle}>Submit</button>
            </form>
        </div>
    )
}

export default Form
