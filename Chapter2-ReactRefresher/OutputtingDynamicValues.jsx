const names = ['Maximilian','Manuel'];

function Post() 
{
    const chosenName = Math.random() > 0.5 ? names[0] : names[1];
    return(
        <p>{chosenName}</p>
    );

}
  export default Post;
