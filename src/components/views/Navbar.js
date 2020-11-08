import React from 'react'

const Navbar = ({ heading }) => {
    return (
        
            <nav style={navStyle}>
           <h1 style={{fontSize: '40px'}}>{heading}</h1>
           </nav> 
        
    )
}

const navStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: '80px',
    width: '100vw',
    backgroundColor: 'orange'
}

export default Navbar;
