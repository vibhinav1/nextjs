//app.jsx

import Post from './components/Post';

function App() {
  return (
  <main>
    <Post author ="maximilian" body = "react is awesome" />
    <Post />
    <Post />
  </main>
  );
}
  export default App;

//post.jsx
function Post(props) 
{
    return(
      <div>
        <p>{props.author}</p>
        <p>{props.body}</p>
      </div>  
    );

}
  export default Post;

