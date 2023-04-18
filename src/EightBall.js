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
    const [count] = useState({green: 0, goldenrod: 0, red: 0})


    //TODO: add docstring, still a function
    function handleClick() {
        const randomId = Math.floor(Math.random() * answers.length);
        const newAnswer = answers[randomId];
        count[newAnswer.color] += 1;
        setColor(newAnswer.color);
        setMsg(newAnswer.msg);
    }

    function handleReset() {
        setColor("black");
        setMsg("Think of a question");
    }

    return (
        <div>
            <div
                onClick={handleClick}
                className="EightBall"
                style={{ backgroundColor: color }}
            >
                <div>
                    {msg}
                </div>
            </div>
            <p>Green:{ count.green}</p>
            <p>Yellow: {count.goldenrod}</p>
            <p>Red: {count.red}</p>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}



export default EightBall;
