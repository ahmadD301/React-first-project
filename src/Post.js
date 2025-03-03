
const postStyle = {
    padding: "20px",
    border: "2px solid teal",   
    borderRadius: "8px",
    margin: "25px auto",
    maxWidth: "600px",
    background: "#fff",          
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)", 
  };
function Post(){
    return(
        <div style={postStyle}>
            <h2>POST TITLE </h2>
            <hr />
            <p>here's the post pody</p>
        </div>
    );
}

export default Post;