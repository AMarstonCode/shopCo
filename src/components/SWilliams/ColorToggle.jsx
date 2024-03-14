import "./styles.css";
import { useState } from "react";

const ColorToggle = () => {
  const [currentColor, setCurrentColor] = useState("");
  return (
    <>
      <div className={"color-toggle-container " + currentColor}>
        { currentColor === "green" && (<p className="quote">Prison doesn't define me</p>)}
        <div>
          <button
            onClick={() => {
              setCurrentColor("orange");
            }}
          >
            orange
          </button>
          <button
            onClick={() => {
              setCurrentColor("green");
            }}
          >
            green
          </button>
          <button
            onClick={() => {
              setCurrentColor("purple");
            }}
          >
            purple
          </button>
        </div>
      </div>
    </>
  );
};

export default ColorToggle;
