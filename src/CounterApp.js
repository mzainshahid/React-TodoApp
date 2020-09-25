import React, { useState } from 'react';

function CounterApp() {
    const [Counter, SetCounter] = useState(0)
    console.log('Run ==>', Counter)
    return (
        <div style={{ backgroundColor: "lightseagreen", textAlign: 'center', display: "flex", justifyContent: "center", height: '100vh', alignItems: 'center' }}>
            <div style={{ textAlign: "center", height: '400px', width: "450px", backgroundColor: "skyblue", boxShadow: "0 0  8px black", }}>
                <h1 style={{ margin: '0px' }} >COUNTER</h1>
                {Counter}
                <br></br>
                <button style={{ backgroundColor: "darkgray", padding: "5px", }} onClick={() => SetCounter(Counter + 1)}>Increment</button>
                <button style={{ backgroundColor: "darkgray", padding: "5px", }} onClick={() => SetCounter(Counter - 1)}>Decrement</button>
            </div>
        </div>
    );
}
export default CounterApp;
