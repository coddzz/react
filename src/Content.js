import React from 'react'

const Content = () => {

    function handleNameChange() {
        const names = ['Black','White','Red','Green','Blue'];
        const int = Math.floor(Math.random()*5);
        return names[int];
    }

    return (
        <main>
            <i>
                <b>Hello World !!</b>
                <p>Refresh to change names</p>
                <p>Colours: {handleNameChange()} </p>
            </i>
        </main>
    )
}

export default Content