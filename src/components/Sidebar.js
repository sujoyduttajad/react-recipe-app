import React from 'react'
import { Category, Document, Heart, Graph, Setting, InfoCircle } from 'react-iconly';
import logo from '../images/logo.svg'


const Sidebar = () => {
    return (
        <aside>
            
            <section className="slideout">

                <div className="logo-container">
                    <img src={logo} alt="logo" />
                </div>
                <div className="icon-container">
                    <Category name="category" set="light border" primaryColor="white" size="large"/>
                    <h3>Overview</h3>
                </div>
                <div className="icon-container">
                    <Document name="category" set="light border" primaryColor="white" size="large"/>
                    <h3>Recipes</h3>
                </div>
                <div className="icon-container">
                    <Heart name="category" set="light border" primaryColor="white" size="large"/>
                    <h3>Favourites</h3>
                </div>
                <div className="icon-container">
                    <Graph name="category" set="light border" primaryColor="white" size="large"/>
                    <h3>Community</h3>
                </div>
                <div className="icon-container">
                    <Setting name="category" set="light border" primaryColor="white" size="large"/>
                    <h3>Settings</h3>
                </div>
                <div className="icon-container">
                    <InfoCircle name="category" set="light border" primaryColor="white" size="large"/>
                    <h3>Help</h3>
                </div>
            </section>
        </aside>
    )
}

export default Sidebar
