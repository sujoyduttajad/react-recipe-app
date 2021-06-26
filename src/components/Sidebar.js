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
                    <Category stroke='bold' name="category" set="light border" primaryColor="white" size="large"/>
                    <h3>Overview</h3>
                </div>
                <div className="icon-container">
                    <Document stroke='bold' name="category" set="light border" primaryColor="white" size="large"/>
                    <h3>Recipes</h3>
                </div>
                <div className="icon-container">
                    <Heart stroke='bold' name="category" set="light border" primaryColor="white" size="large"/>
                    <h3>Favourites</h3>
                </div>
                <div className="icon-container">
                    <Graph stroke='bold' name="category" set="light border" primaryColor="white" size="large"/>
                    <h3>Community</h3>
                </div>
                <div className="icon-container">
                    <Setting stroke='bold' name="category" set="light border" primaryColor="white" size="large"/>
                    <h3>Settings</h3>
                </div>
                <div className="icon-container">
                    <InfoCircle stroke='bold' name="category" set="light border" primaryColor="white" size="large"/>
                    <h3>Help</h3>
                </div>
            </section>
        </aside>
    )
}

export default Sidebar
