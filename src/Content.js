import React from 'react'

const Content = () => {

    function handleNameChange() {
        const names = ['Black','White','Red','Green','Blue'];
        const int = Math.floor(Math.random()*5);
        return names[int];
    }

    return (
        <div>
            <i>
                <b>Hello World !!</b>
                <p>Refresh to change names</p>
                <p>Colours: {handleNameChange()} </p>
            </i>
        </div>
    )
}

export default Content