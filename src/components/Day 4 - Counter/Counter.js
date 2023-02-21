import {useState} from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const handleIncrement = () => {
        setCounter(prevCounter => prevCounter + 1);
    };

    const handleDecrement = () => {
        setCounter(prevCounter => prevCounter - 1);
    }

    return (
        <div className='counter'>
            <h1 style={{textAlign: 'center'}}>{counter}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    );
};

export default Counter;