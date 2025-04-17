import React from "react";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";

const Content = () => {

    const [coloursName, setName] = useState("Black");
    function handleNameChange() {
        const names = ['Black','White','Red','Green','Blue'];
        const int = Math.floor(Math.random()*5);
        setName(names[int]);
    }

    const handleClick = () =>{
        console.log("Button Clicked");
    }
    const handleClick2 = (msg) =>{
        console.log(msg);
    }

    const [count, setCount] = useState(0);


    function incrementFunction() {
        setCount(prevCount => prevCount + 1)
    }

    function decrementFunction() {
        setCount(prevCount => prevCount - 1)
    }

    const [items, setItems] = useState(
        [
            {
                id:1,
                checked:true,
                item: "Practice Coding"
            },
            {
                id:2,
                checked:true,
                item: "Playing Cricket"
            },
            {
                id:3,
                checked:false,
                item: "Reading Books"
            }
            

        ]
    )

    const handleCheck = (id) =>{
        const listItems = items.map((item) => 
            item.id === id?{...item, checked:!item.checked} : item)
        setItems(listItems)
    }

    return (
        <main>
            <i>
                <b>Hello World !!</b>
                <p>Refresh to change names</p>
                <button onClick={handleNameChange}>Colours Name </button>
                <p>{coloursName}</p>
            </i>
            <button onClick={handleClick}> Button 1 </button>
            <button onDoubleClick={() => handleClick2("Hello World!!")}> Button 2 (Double click)</button>
            <button onClick={incrementFunction}>+</button>
            <span>{count}</span>
            <button onClick={decrementFunction}>-</button>
            
            <ul>
                {items.map((item) =>(
                    <li className="item" key={item.id}>
                        <input
                            type="checkbox"
                            onChange={() => handleCheck(item.id)}
                            checked = {item.checked}
                        />
                        <label> {item.item}</label>
                        <FaTrash 
                            role = "button"
                            tabIndex = "0"
                        />
                    </li>
                ))
                }
            </ul>
        </main>
    )
}

export default Content