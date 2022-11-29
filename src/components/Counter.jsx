import React, { useState } from 'react';

const Counter = function () {
    const [count, setCount] = useState(0);
    function increment() {
        setCount(count + 1)
    }
    function decrement() {
        setCount(count - 1)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={decrement}>decrement</button>
            <button onClick={increment}>increment</button>
        </div>
    )
}

export default Counter;