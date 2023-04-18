import { useState } from "react";
import "./EightBall.css"

/** Magic Eight Ball Toy
 *
 * Props:
 * - answers
 *  Ex: [{ msg: "It is certain.", color: "green" },{...}...]
 *
 * State: TODO: data type
 * - color - sets background color
 * - msg - answer to your question
 * 
 *
 * App -> EightBall
 */

function EightBall({ answers }) {
    const [color, setColor] = useState("black");
    const [msg, setMsg] = useState("Think of a question");


    //TODO: add docstring, still a function
    function handleClick() {
        const randomId = Math.floor(Math.random() * answers.length);
        //TODO: create newAnswer variable
        setColor(answers[randomId].color);
        setMsg(answers[randomId].msg);
    }
    
    return (
        <div 
            onClick={handleClick} 
            className="EightBall" 
            style={{backgroundColor: color}}
        >
            <div>
                {msg}
            </div>
        </div>
    );
  }
  
  
  
  export default EightBall;
  