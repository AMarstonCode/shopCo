import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    
    return (
        <>
        <h2>{count}</h2>
        <button onClick={() =>{
            setCount(count + 1);
        }}
        >Add One
        </button>
        <button onClick={() => {
            setCount(0);
        }}>Reset

        </button>
        <button onClick={() => {
            setCount(count - 1);
        }}>Subtract One
            </button>
        </>
    );
};

export default Counter;