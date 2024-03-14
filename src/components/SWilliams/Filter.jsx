import { useState } from "react"
import "./styles.css"

const Filter = () => {
    const tasks = [
        { id: 1, text: 'Complete assignment', completed: false },
        { id: 2, text: 'Read a book', completed: false },
        { id: 3, text: 'Go for a run', completed: true },
        { id: 4, text: 'Buy groceries', completed: false },
    ];
    const [filteredTasks, setFilteredTasks] = useState([...tasks]);

    const filterData = (filterType) => {
        let filteredData = tasks.filter((item) => {
            if (filterType === "Completed") {
                return item.completed === true;
            }
            if (filterType === "Incomplete") {
                return item.completed === false;
            }
        });
        setFilteredTasks(filteredData);
    }

    return (
        <div>
        <h1>My Filter Component</h1>
        <ul>
            {filteredTasks.map((item) => {return (
                <li className={item.completed === true ? "green" : "red"}>
                    {item.text}
                </li>
            );
            })}
        </ul>
        <button onClick={() => {filterData("Completed");}}>Completed</button>
        <button onClick={() => {filterData("Incomplete");}}>Incomplete</button>
        <button onClick={() => {setFilteredTasks([...tasks]);}}>Reset</button>
        </div>
    );
};

export default Filter;
