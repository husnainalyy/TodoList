import  { useContext, useRef } from 'react'
import todoContext from '../context/context';
import { motion } from "framer-motion"


const TodoPage = () => {
  const { allTodo } = useContext(todoContext)
  const ref = useRef(null);

  console.log(allTodo)
  return (
    <div className='relative overflow-'>
      <div ref={ref} className=' bg-zinc-900 w-full h-screen flex justify-center items-center '>
        <h1 className='text-9xl text-center font-semibold text-gray-700' >Todo List</h1>
      </div>
      {console.log("okk")}
      <div className=' p-3 grid grid-cols-2 lg:grid-cols-6 gap-9 absolute top-0 left-0 z-10'>
        {allTodo && allTodo.map((todo) => (
          console.log("hello"),
          <motion.div
              drag dragConstraints={ref}
              whileDrag={{ scale: 1.2 }}
              dragElastic={0.2}
              key={todo.id}
              className=' border border-gray-700 w-44 lg:w-44 h-44 lg:h-52  rounded-3xl flex flex-col justify-between items-center overflow-hidden'>
              
              <div
                className=' bg-indigo-400 w-full h-1/4 flex justify-center items-center'>
                <p className='text-gray-00 text-xl  w-full text-center' >{todo.title}</p>
              </div>
              <div className='bg-zinc-800 bg-opacity-50  w-full h-1/2 flex justify-center items-center'>
                  <p className=' text-sm lg:text-md  text-center text-gray-200 '>{todo.desc}</p>
              </div>
              <div className=' bg-green-400 w-full h-1/4 flex justify-center items-center'> 
                  <p className='text-sm'>{todo.date}</p>
              </div>
          </motion.div>
            
        ))
        }
      </div>

    </div>
  );

}


export default TodoPage