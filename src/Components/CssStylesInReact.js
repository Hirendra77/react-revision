import React from "react";
import "../App.css";
const styles = {
  internal: {
    color: "green",
  },
  light:{
    
    backgroundColor:white,
    color:"blue"
  },
  dark:{
    backgroundColor:"black",
    color:"white"
  }
};

function CssStylesInReact() {
 
const [theme, setTheme] = useState(false)

const toogleTheme = ()=>{
    setTheme(!theme);
}

  return (
    <div style={theme ? styles.light : styles.dark}>
      <h1 className="external"> External CSS</h1>
      {/* External Styling -- By ading external file using import "./App.css"  */}


<h1>Internal CSS</h1>
      {/* <h1 style={styles.internal}>Internal CSS</h1> */}
      {/* By addiing Style Objects inside js file only */}


      <h1 style={theme ? {color:"blue", backgroundColor:"lightgrey"} :{olor:"black", backgroundColor:"white"}}>Inline CSS</h1>
    
    {/* why we need inline and internal styling */}

     <button onClick={toogleTheme}>Toogle Theme</button>
    </div>
  );
}

export default CssStylesInReact;
