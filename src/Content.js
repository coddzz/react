import React from 'react'

const Content = () => {

    function handleNameChange() {
        const names = ['Black','White','Red','Green','Blue'];
        const int = Math.floor(Math.random()*5);
        return names[int];
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
                <p>Colours: {handleNameChange()} </p>
            </i>
            <button onClick={handleClick}> Button 1 </button>
            <button onClick={() => handleClick2('Hello World')}> Button 2 </button>
        </main>
    )
}

export default Content