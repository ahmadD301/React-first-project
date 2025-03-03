const containerStyle = {
    width: "100%",
    backgroundColor: "teal",
    minHeight: "200px",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem", 
  };
function Header(){
    return(
        <div style={containerStyle}>
            <h1>Post to Me</h1>
        </div>
    );

}
export default Header;