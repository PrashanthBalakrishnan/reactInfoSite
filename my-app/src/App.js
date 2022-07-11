import React, { useState } from "react"
import Main from "./components/Main"
import NavBar from "./components/Navbar"


export default function App() {

    const [darkMode, setDarkMode] = useState(true)

    function toggleDarkMode() {
        setDarkMode(currentMode => !currentMode)
    }

    return (
        <div className="container">
            < NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            < Main darkMode={darkMode} />
        </div>

    )
}