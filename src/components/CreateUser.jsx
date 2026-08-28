import { useState } from "react";
import { createMember } from "../api.js";

function CreateUser() {
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [position, setPosition] = useState("");

    async function handleCreateUser() {
        // Basic validation
        if (!name || !lastname || !position) {
            alert("Please fill in all fields.");
            return;
        }

        const newUser = {
            name: name,
            lastname: lastname,
            position: position,
        };

        try {
            const createdUser = await createMember(newUser);

            console.log("Created user:", createdUser);

            alert(`User ${createdUser.name} was created successfully!`);

            // Clear the form
            setName("");
            setLastname("");
            setPosition("");
        } catch (error) {
            console.error("Failed to create user:", error);
            alert("Failed to create user.");
        }
    }

    return (
        <div>
            <h2 className="text-center m-2 text-xl font-bold text-gray-900">
                Create User Here
            </h2>

            <div className="flex flex-col gap-5 items-center">

                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="max-w-80 w-full px-4 py-2 border border-gray-300 bg-gray-100 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                />

                <input
                    type="text"
                    placeholder="Last Name"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    className="max-w-80 w-full px-4 py-2 border border-gray-300 bg-gray-100 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                />

                <input
                    type="text"
                    placeholder="Position"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    className="max-w-80 w-full px-4 py-2 border border-gray-300 bg-gray-100 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                />

                <button
                    className="bg-indigo-600 text-white px-5 py-2.5 font-medium rounded-lg shadow-md hover:bg-indigo-700 hover:shadow-lg transition-all duration-200"
                    onClick={handleCreateUser}
                >
                    Save
                </button>
            </div>
        </div>
    );
}

export default CreateUser;


// import { useState } from "react";
// import { createMember } from "../api.js";

// function CreateUser() {
//     const [name, setName] = useState("");
//     const [lastname, setLastname] = useState("");
//     const [position, setPosition] = useState("");

//     async function handleCreateUser() {
//         if (!name || !lastname || !position) {
//             alert("Please fill in all fields. ด้วยนะ");
//             return;
//         }

//         try {
//             const createdUser = await createMember(newUser);
//             console.log("Created user:", createdUser);
//             alert(`User ${createdUser.name} was created successfully!`);

//             // Clear the form
//             setName("");
//             setLastname("");
//             setPosition("");
//         } catch (error) {
//             console.error("Failed to create user:", error);
//             alert("Failed to create user.");
//         }
//     }

//     return (
//         <div>
//             <h2 className="text-center m-2 text-xl font-bold text-gray-900">Create User Here</h2>

//             <div className="flex flex-col gap-5 items-center ">
//                 <input 
//                     type="text" 
//                     placeholder="Name" 
//                     className="max-w-80 w-full px-4 py-2 border border-gray-300 bg-gray-100 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
//                 />
//                 <input 
//                     type="text" 
//                     placeholder="Last Name" 
//                     className="max-w-80 w-full px-4 py-2 border border-gray-300 bg-gray-100 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
//                     />
//                 <input 
//                     type="text" 
//                     placeholder="Position" 
//                     className="max-w-80 w-full px-4 py-2 border border-gray-300 bg-gray-100 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
//                     />
                
//                 <button 
//                     className="bg-indigo-600 text-white px-5 py-2.5 font-medium rounded-lg shadow-md hover:bg-indigo-700 hover:shadow-lg transition-all duration-200"
//                     onClick="">
//                     Save
//                 </button>
//             </div>
//         </div>
//     )
// }

// export default CreateUser;

