import TageBTN from './TagBtn'
const divStyle={
    margin : "25px",
    border: "2px solid teal",
    borderRadius: "8px",
    padding : "10px",
}
// const btnStyle={
//     background : "purple",
//     border : "non",
//     color : "white",
// }
function SideMenu (){
    return(
        <div style={divStyle}>
            <TageBTN/>
            <TageBTN/>
            <TageBTN/>
            <TageBTN/>
            <TageBTN/>
            <TageBTN/>
            <TageBTN/>
            <TageBTN/>
            <TageBTN/>
            <TageBTN/>
            <TageBTN/>
            <TageBTN/>
            <TageBTN/>
        </div> 
    );
}
export default SideMenu;