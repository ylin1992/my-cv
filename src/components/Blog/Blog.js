import ArticleLists from './ArticleLists';
import Form from './Form.js';
import React, {useState, useEffect} from 'react';


function Blog() {
    const [articles, setArticles] = useState([]);
    const [addState, setAddState] = useState(false);
    const [post, setPost] = useState({});
  
  
    function handleDelete(_id) {
      console.log(_id);
      fetch("http://localhost:5000/delete/" + _id, {
        'method': 'DELETE'
      })
      .catch(err => console.log(err))
      window.location = "http://localhost:3000"
    }
  
    function handleOnClick(){
      setAddState(true);
    }
  
    function addArticle(event){
      event.preventDefault();
      fetch("http://localhost:5000/post", {
        'method':'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
      })
      .then(response => response.json())
      .catch(err => console.log(err))
      window.location = "http://localhost:3000"
    }
  
    function contentOnChange(target){
      const {name, value} = target;
      
      setPost( (preValue) => {
        return {
          ...preValue,
          [name]: value
        }
      })
    }
  
    useEffect(() => {
      fetch("http://localhost:5000/get", {
        'method':'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(resp => resp.json())
      .then(resp => setArticles(resp.list))
      .catch(err => console.log(err))
    }, [])
  
    return (
      <div className="App">
        <div><ArticleLists handleDelete={handleDelete} articles={articles}/></div>
        <button onClick={handleOnClick}>Add</button>
        {addState ? <Form  addArticle={addArticle} contentOnChange={contentOnChange} /> : null}
      </div>
    );
}

export default Blog;
