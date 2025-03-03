
import './App.css';
import Header from './header.js';
import Post from './Post.js';
import SideMenu from './SideMenu.js'


function App() {
  return (
    <div className="App" >
      <Header/>
      <div style={{ display: "flex", justifyContent: "center" ,width : "100%" , alignItem:"center"}}>
        
        <div style={{width : "40%"}}>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
        </div>
        <div style={{width : "20%"}}>
        <SideMenu/>
        </div>
      </div>
    </div>
  );
}

export default App;
