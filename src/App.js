import React, {useState, useEffect} from 'react';
import Posting from './Posting.js'
import './App.css';

function App() {
  const [username, setUsername] = useState([])
  const [seconds, setSeconds] = useState(0)
  setTimeout(() => {
      
    setSeconds(seconds => seconds + 1)
    // Minute(time)
    
  }, 250)
  useEffect(() => { 
    if(seconds === 100) {
      username.shift();
      
    }
  },[seconds])
  if(seconds === 101){
    setSeconds(seconds => seconds * 0)
  }
  
  
  
  return (
    <div>
      <div className="App">
        <div className="title" ><h2>This is THE green Stream</h2>
        {/* <form className= "Input">
          <label>
            UserName: 
            <input type="text" name="name"  placeholder = "Haro" />
          </label>
          <input type="submit" value="Submit"/>
          
        </form> */}
          <Posting UName={username} Seconds = {seconds}/>
        
        </div>
        <div className = "main">
          <div className = 'header'>This is the super super awesome Stream. Come join the party! Not..</div>
          <div className = 'streaming' onClick={() => setUsername( username => username = ["Streaming", "More and More content", "here we go!", "try as hard as you can you!", 'your the best in the west', 'the ferocious tiger', 'theres always more', 'my bony lies over the river', 'do you like bon bons', 'give me more give me more'])}>Click Me to Stream INfo!!</div>
        </div>
      </div>
    </div>
  );
}

export default App;
