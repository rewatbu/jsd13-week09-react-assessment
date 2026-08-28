import { useState } from 'react'

function Button({ name, onClick }) {
    return (
        <button 
          onClick={onClick} 
          className="bg-gray-200 px-3 py-2.5 font-medium rounded-sm shadow-md hover:bg-gray-500 hover:shadow-lg transition-all duration-200">
            {name}
        </button>
    );
}

function Hero() {
    const [clicked, setClicked] = useState("");

    function handleClick(section) {
        setClicked(section)
    }

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">Generation Thailand</h1>
            <span className="text-4xl font-bold tracking-tight text-gray-900">
                { clicked ? clicked : "React - Assessment"}
            </span>

            <div className="button-section flex justify-center gap-20 m-8">
                <Button name="User Home Section" onClick={() => handleClick("User Home Section")} />
                <Button name="Admin Home Section" onClick={() => handleClick("Admin Home Section")} />
            </div>
        </div>
    )
}

export default Hero;