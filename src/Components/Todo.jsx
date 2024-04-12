import {useContext} from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import  { useEffect } from 'react';
import todoContext from '../context/context';


const Todo = () => {

    const [id, setId] = useState("")
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [date, setDate] = useState("");
    const [isUpdating, setIsUpdating] = useState(false);
    const { allTodo, setAllTodo } = useContext(todoContext);




    useEffect(() => {
    console.log(allTodo);
    }, [allTodo]);

const handleAdd = () => {
    if (!title || !desc || !date) {
        alert('Please fill out all fields.');
        return;
    }
    if (isUpdating) {
        // Update the existing todo item
        setAllTodo(allTodo.map(todo => 
            todo.id === id ? { id: id, title: title, desc: desc, date: date } : todo
        ));
        setId(null); // Reset id state
    } else {
        const newIdNumber = Math.floor(1000 + Math.random() * 9000);
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const newIdCharacter = characters.charAt(Math.floor(Math.random() * characters.length));
        const newId = newIdCharacter + newIdNumber;

        // Add a new todo item
        setAllTodo(prevTodo => [
        ...prevTodo,
        { id: newId, title: title, desc: desc, date: date }
        ]);
    }
    setIsUpdating(false); // Reset isUpdating state
    setTitle("");
    setDesc("");
    setDate("");
}

const handleClear = (id) => {
    setAllTodo(allTodo.filter(todo => todo.id !== id));
}

const handleUpdate = (id) => {
    const todo = allTodo.find(todo => todo.id === id);
        if (todo) {
            setId(todo.id);
            setTitle(todo.title);
            setDesc(todo.desc);
            setDate(todo.date);
            setIsUpdating(true);
        }
    }

const handleTitleChange = (e) => {
    setTitle(e.target.value)
}
const handleDescChange = (e) => {
    setDesc(e.target.value)
}
const handleDateChange = (e) => {
    setDate(e.target.value)
}

    return (
    <>
        <todoContext.Provider value={{ allTodo, setAllTodo }}>    
            <div className='w-full h-screen p-2  bg-zinc-800'>
                <Link to="/TodoPage">   
                    <button className='text-white rounded-2xl px-2 py-1 border border-white hover:bg-green-400'>Todos</button>        
                </Link>
                <div className='flex  justify-center items-center py-8'>
                    <p className='text-6xl font-semibold text-red-400'>Todo List</p> 
                </div>
                <div className='flex justify-center w-full px-2 items-center gap-2'>
                    <input type="text" onChange={handleTitleChange} value={title} className='focus:outline-none  w-3/5   py-1 text-sm'  placeholder='Enter the title'/>
                    <input type="text" onChange={handleDescChange} value={desc} className='focus:outline-none  w-1/2 py-1 text-sm'   placeholder='Enter the Description'/>
                    <input type="date" onChange={handleDateChange} value={date} className='focus:outline-none w-1/2 px-3 py-1 text-sm ' />
                    <button onClick={handleAdd} className='border rounded-2xl px-3 py-1 text-sm bg-slate-50 hover:bg-orange-200 ' >{isUpdating ? 'Update' : 'Create'}</button>
                </div>

                <table className='w-full  text-left border-zinc-100 border-collapse border  mt-4'>             
                    <thead className='  text-sm text-zinc-400 mt-4 bg-stone-700'>
                        <tr>
                            <th className='border'>sr.</th>
                            <th className='border'>id</th>
                            <th className='border'>Title</th>
                            <th className='border'>Description</th>
                            <th className='border'>Date</th>
                            <th className='border'>create</th>
                            <th className='border'>clear</th>
                        </tr>
                    </thead>  
                    
                    <tbody className=' text-sm text-zinc-50 mt-4 '>
                        {allTodo.map((todo,index) => {
                            return(
                                <tr key={todo.id}>                    
                                    <td className='border'>{index + 1 }</td>
                                    <td className='border'>{todo.id}</td>
                                    <td className='border'>{todo.title }</td>
                                    <td className='border'>{todo.desc }</td>
                                    <td className='border'>{todo.date}</td>
                                    <td className='border text-center'>
                                        <button onClick={() => handleUpdate(todo.id)} className='border hover:bg-yellow-300 '>Update</button>
                                    </td>
                                    <td className='border  text-center'>
                                        <button onClick={()=> handleClear(todo.id)} className='border hover:bg-red-500 '>Clear</button>                 
                                    </td>
                                </tr>     
                            )    
                        })}
                    </tbody>
                </table>
            </div>
        </todoContext.Provider>
    </>
    )
}

export default Todo