import React, { useState } from 'react'


function TodoApp() {
    let [items, setitems] = useState([])
    const [inputvalue, setvalue] = useState("");

    const addTodo = () => {
        var todoObj = {
            todovalue: inputvalue,
        }
      
        setitems([...items,todoObj])
        
        console.log('Arr1==>',items)
        console.log('Arr2==>',...items)
        // console.log(items)
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>TODO APP</h1>
           
            <div>
                <input type='text' onChange={(e) => setvalue(e.target.value)}></input>
                <button onClick={() => addTodo()}>Add</button>
                <button>Edit</button>
                <button>Delete All</button>
            </div>

            <ul>
                {/* <li>list</li>3 */}
                {items.map( (obj,index) => {
                
                    return(
                    <li key={index} >{obj.todovalue}</li>
                    )
                } )}
            </ul>
           
        </div>
    );
}


export default TodoApp;