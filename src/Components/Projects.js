import React, { useState, useEffect } from 'react'
import './css/Projects.css'
const Projects = () => {

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return (
        <div className="projects">
            <h1>Projects</h1>
            <p
                style={{ transform: `translateX(${offsetY * -0.5}px)` }}> COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON </p>
            <p className="divp"
                style={{ transform: `translateX(${(offsetY * 0.5) - 1000}px)` }}> COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON </p>
        </div>
    )
}

export default Projects
