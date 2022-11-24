import React from 'react';
import { useNavigate } from 'react-router';

const Todos = ({todo}) => {
    
    const navigate=useNavigate()
   
    const removeItem=()=>{
        localStorage.removeItem('AddTodo')
        navigate('/')
    }
    
    
    return (
        <div>
          <section className="max-w-xl p-6 mx-auto mt-10 bg-white rounded-md shadow-lg dark:bg-gray-800">
    <h2 className="text-3xl font-semibold mb-5  text-dark font-bold capitalize dark:text-white">Proccess</h2>

        <div className='shadow-lg py-2 align-middle bg-red-50 pl-5'>
        <h2 className='text-xl font-semibold'>Title : <span className='text-lg font-serif'>{todo.title}</span></h2>
        
        </div>

        <div className='shadow-lg py-2 align-middle mt-2 bg-blue-50 text-justify pl-5'>
        <h2 className='text-xl font-semibold'>Description </h2><hr /><hr/><hr/>
        <span className='text-lg font-serif'>{todo.desc}</span>
        
        </div>
     
     <button className="px-6 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-md hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80">
    Sure Add?
</button>
        <button onClick={removeItem} className="px-6 ml-5 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-500 rounded-md hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-80">
    Delete?
</button>
     

    </section>
        </div>
    );
};

export default Todos;