import React, {useState, useEffect} from 'react'; 

 
function Posting (props) { 
    console.log(props.UName);
    console.log(props.Seconds);
    const [move, setMove] = useState(0);
    
    useEffect(() => { 
        
        if(props.Seconds === 100){
            setMove(move => move * 0); 
        }
        var previous = props.UName[1]
        setMove(move => move + 5);
        moveStyle()
    },[props.Seconds])

    
    function moveStyle(){
        if(props.Seconds){
            const mystyle= {paddingLeft: `${move}px`}
            return mystyle
        }
        // }if(props.Seconds == 35){
        //     props.UName[0] = "";
        // }
    }
    function stream1() { 
        if(props.UName){
          return <div className = "Streaming" style={moveStyle()}>{props.UName[0]}</div>
        }
    }
    return (
        <div>
            {stream1()}
            <ul>
                <li>Username</li>
                <li>Title </li>
                <li>User Input</li>
            </ul>
        </div>

    )
}

export default Posting;