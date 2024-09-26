//create file called post.module.css

//post.jsx
import classes from './Post.module.css'
function Post(props) 
{
    return(
      <div classname = {classes.post}>
        <p>{props.author}</p>
        <p>{props.body}</p>
      </div>  
    );

}
  export default Post;
