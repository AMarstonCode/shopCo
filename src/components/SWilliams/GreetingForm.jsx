import { useState } from "react"

const GreetingForm = () => {
    const [name, setName] = useState("");
    const greeting = "Hello, ";
    return (
        <form>
            <h1>GreetingForm</h1>
            <h2>{greeting + name}</h2>
            <input onChange={(event) => {
                setName(event.target.value);
            }}/>
        </form>
    );

};

export default GreetingForm;