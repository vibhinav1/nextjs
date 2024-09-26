//PostsList.module.css
.posts {
  list-style: none;
  max-width: 50rem;
  margin: 1rem auto;
  padding: 1rem 0;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, 30%);
  justify-content: center;
}


//newpost.jsx
import classes from './NewPost.module.css';

function NewPost() {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required />
      </p>
    </form>
  );
}

export default NewPost;
