import React, { useState } from 'react'

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
        </main>
    )
}

export default Content