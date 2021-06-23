import React from 'react'
import './Sidebar.css'


const Sidebar = () => {
    return (
        <aside>
            <section className="slideout">
            <div><h3>Overview</h3></div>
            <div><h3>Recipes</h3></div>
            <div><h3>Favourites</h3></div>
            <div><h3>Settings</h3></div>
            <div><h3>Help</h3></div>
            </section>
        </aside>
    )
}

export default Sidebar
