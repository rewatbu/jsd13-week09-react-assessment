import { useState } from "react";
import { createMember } from "../api.js";

function CreateUser() {
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [position, setPosition] = useState("");
    
    return (
        <div>
            <h2 className="text-center m-2 text-xl font-bold text-gray-900">Create User Here</h2>

            <div className="flex flex-col gap-5 items-center ">
                <input 
                    type="text" 
                    placeholder="Name" 
                    className="max-w-80 w-full px-4 py-2 border border-gray-300 bg-gray-100 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                />
                <input 
                    type="text" 
                    placeholder="Last Name" 
                    className="max-w-80 w-full px-4 py-2 border border-gray-300 bg-gray-100 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                    />
                <input 
                    type="text" 
                    placeholder="Position" 
                    className="max-w-80 w-full px-4 py-2 border border-gray-300 bg-gray-100 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                    />
                
                <button 
                    className="bg-indigo-600 text-white px-5 py-2.5 font-medium rounded-lg shadow-md hover:bg-indigo-700 hover:shadow-lg transition-all duration-200"
                    onClick="">
                    Save
                </button>
            </div>
        </div>
    )
}

export default CreateUser;