import { useState } from "react"
import "./styles.css"


const ColorToggle = () => {
   const [currentColor, setCurrentColor] = useState("");
    return (
        <div className={"color-toggle-container " + currentColor}>
              {currentColor === "green" && <p className="quote">"Tomorrow hopes we have learned something from yesterday." -John Wayne </p>}
            <div>
            <button onClick={() => {setCurrentColor("orange")}}>Orange</button>
            <button onClick={() => {setCurrentColor("green")}}>Green</button>
            <button onClick={() => {setCurrentColor("purple")}}>Purple</button>
            </div>
        </div>
    )
}  

export default ColorToggle;