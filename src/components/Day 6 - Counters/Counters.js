import {useState} from "react";

const Counters = () => {
    const [counters, setCounters] = useState([0, 0, 0]);

    const handleIncrement = (inputIndex) => {
        const nextCounters = counters
            .map((counter, index) => inputIndex === index ? counter + 1 : counter);
        setCounters([...nextCounters]);
    };

    const handleDecrement = (inputIndex) => {
        const nextCounters = counters
            .map((counter, index) => inputIndex === index ? counter - 1 : counter);
        setCounters([...nextCounters]);
    }

    const handleReset = (inputIndex) => {
        const nextCounters = counters
            .map((counter, index) => inputIndex === index ? 0 : counter);
        setCounters([...nextCounters]);
    };

    return (
        <div style={{textAlign: 'center', minHeight: '100vh', display: 'grid', placeContent: 'center'}}>
            <h1>Counters</h1>
            <table>
                <thead>
                <tr>
                    <td>Index</td>
                    <td>Counter Value</td>
                    <td>Increment Button</td>
                    <td>Decrement Button</td>
                    <td>Reset Buttton</td>
                </tr>
                </thead>
                <tbody>
                {counters.map((counter, index) => (
                    <tr key={index}>
                        <td>{index}</td>
                        <td>{counter}</td>
                        <td>
                            <button
                                onClick={() => {handleIncrement(index)}}
                            >
                                Increment
                            </button>
                        </td>
                        <td>
                            <button
                                onClick={() => {handleDecrement(index)}}
                            >
                                Decrement
                            </button>
                        </td>
                        <td>
                            <button
                                onClick={() => {handleReset(index)}}
                            >
                                Reset
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Counters;