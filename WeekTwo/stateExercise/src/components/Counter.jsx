import React, {useState, useEffect} from 'react';

export default function Counter({initial, incrimentAmount}){
    const [count, setCount] = useState(() => {
        const saved = localStorage.getItem("count");
        const initialValue = Number(saved);
        return initialValue || initial;
    });


    useEffect(() => {
        localStorage.setItem("count", count);
    }, [count])

    

    return (
        <>
        <h1>Counter</h1>
        <h1>{count}</h1>
        <button onClick={() => setCount(count -incrimentAmount)}>-</button>
        <button onClick={() => setCount(count +incrimentAmount)}>+</button>
        </>
    );
}
