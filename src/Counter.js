import React, { useEffect, useState } from 'react'

function Counter({initialCounter}) {
    const [counter, setcounter] = useState(0);
    const [showReset, setshowReset] = useState(false)
    
    useEffect(() => {
        if(initialCounter){
            setcounter(initialCounter)
        }
        else{
            setcounter(0)
        }
    }, [initialCounter])

    const handleIncrement = () => {
         if(counter < 20){
             setcounter(counter + 1)
             setshowReset(true)
         }
    }
    const handleDecrement = () => {
        if(counter > 0){
            setcounter(counter - 1);
            setshowReset(true)
        }
    }
    const handleResetButton = () => {
        setshowReset(false)
        if(initialCounter){
            setcounter(initialCounter)
        }
        else{
            setcounter(0)
        }
    }

    return (
        <div className="counter__container">
            { showReset  ?  <button onClick={handleResetButton} className="reset__button">Reset</button> : <></>}
            <div className="counter">
                <button disabled={counter >= 20} onClick={handleIncrement}> Increment</button>
                <span className={counter >= 10 ? "red__Counter" : ""}>{counter}</span>
                <button disabled={counter <= 0} onClick={handleDecrement}> Decrement</button>
            </div>
        </div>
    )
}

export default Counter
