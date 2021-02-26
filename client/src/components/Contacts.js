import React, { useState, useEffect } from 'react';
import { navigate, Link } from '@reach/router';
import axios from 'axios';

const Contacts = () => {
    
    return (
        <div className="gridContainer">
            <nav className="item1">
            <Link to="/">
                <p className="topNav" style={{marginTop: "20px"}}>Dashboard</p>
            </Link>
            <Link to="/stock/inventory">
                <p className="topNav">Inventory</p>
            </Link>
            <Link to="/stock/lowstock">
                <p className="topNav">Low Stock</p>
            </Link>
            <hr className="navHr"/>
            <Link to="/stock/new">
                <p className="bottomNav">Add Item</p>
            </Link>
            <Link to="/stock/contacts">
                <p className="bottomNav contacts">Contacts</p>
            </Link>
            </nav>
            <header className="item2">
                <h1>Contacts</h1>
            </header>
            <header className="item3">
            <h2>Inventory Summary</h2>
            <div className="invSum">
            <h3>Total Inventory Cost</h3>
            <p>$5,600</p>
            </div>
            </header>
            <div className="item4">
            This is your Contacts
            </div>
        </div>
    )
}

export default Contacts;