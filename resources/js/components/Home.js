import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div id="homepage"> 
            <Link to="/example">Go to Example</Link>
            <p>dadjadj</p>
        </div>
    );
}