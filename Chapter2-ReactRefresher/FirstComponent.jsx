// post.jsx part

function Post() {
  return(
    <div>
      <p>VIBHINAV</p>
      <p>React is Boring!</p>
    </div>
  )
}
export default Post;

//app.jsx part
import Post from './components/Post';

function App() {
  return <Post />;
}

export default App;

