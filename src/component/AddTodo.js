import React from 'react';
import { useNavigate } from 'react-router';
import Todo from './Todo';



const AddTodo = () => {

    let todos=[
        {
            sno:1,
            title:'go to the market',
            desc:'you need to go market'
        },
        {
            sno:2,
            title:'go to the school',
            desc:'you need to go school'
        },
        {
            sno:3,
            title:'go to the field',
            desc:'you need to go field'
        },
    ]



    const AddTodo=(e)=>{
        e.preventDefault();
        
        const title=e.target.title.value;
        const desc=e.target.desc.value;
        const todu={
            title:title,
            desc:desc
        }


    


//   navigate('/todos')
  


    }

   


    return (
        <div>
            <section className="max-w-xl p-6 mx-auto  bg-white rounded-md shadow-lg dark:bg-gray-800">
    <h2 className="text-2xl font-semibold mb-5 text-center text-gray-700 capitalize dark:text-white">Add Todo</h2>

    <form onSubmit={AddTodo}>
        
            <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="title">Title</label>
                <input id="title" name='title' type="text" required className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>

          

            <div className='mt-3'>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="desc">Description</label>
                <input id="desc" name='desc' type="text" required className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>


        <div className="flex justify-center mt-6">
            <button className="px-20 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">Add</button>
        </div>
    </form>
</section>
        <Todo todo={todos}></Todo>
        </div>
    );
};

export default AddTodo;