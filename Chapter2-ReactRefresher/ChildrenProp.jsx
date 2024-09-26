//modal.jsx
import classes from './Modal.module.css';

function Modal({ children }) {
  return (
    <>
      <div className={classes.backdrop} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;

//modal.module.css

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
}

.modal {
  border: none;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  padding: 0;
  overflow: hidden;
  z-index: 1;
}

//newpost.jsx
import classes from './NewPost.module.css';

function NewPost(props) {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={props.onBodyChange}/>
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={props.onAuthorChange} />
      </p>
    </form>
  );
}

export default NewPost;

//post.jsx
import classes from './Post.module.css';

function Post({ author, body }) {
  return (
    <li className={classes.post}>
      <p className={classes.author}>{author}</p>
      <p className={classes.text}>{body}</p>
    </li>
  );
}

export default Post;
//post.module.css
.post {
  margin: 1rem 0;
  padding: 1rem;
  background-color: #9c7eee;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  animation: animate-in 1s ease-out forwards;
}

.author {
  font-size: 0.8rem;
  font-weight: bold;
  color: #543280;
  margin: 0;
  text-transform: uppercase;
}

.text {
  white-space: pre-wrap;
  font-size: 1.25rem;
  margin: 0.25rem 0 0 0;
  color: #593884;
  font-style: italic;
}

@keyframes animate-in {
  from {
    opacity: 0;
    transform: translateY(1rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

//postlist.jsx

import { useState } from 'react';

import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostsList.module.css';

function PostsList() {
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  return (
    <>
      <Modal>
        <NewPost
          onBodyChange={bodyChangeHandler}
          onAuthorChange={authorChangeHandler}
        />
      </Modal>
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Manuel" body="Check out the full course!" />
      </ul>
    </>
  );
}

export default PostsList;

//postlist.module.css
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


