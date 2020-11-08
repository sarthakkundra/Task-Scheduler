import React from 'react'

const TravelButton = () => {
    return (
        <div>
           <button style={traveller}>Create Schedule</button> 
            <br></br>
            <br></br>
        </div>
    )
}

const traveller = {
    float: 'right',
    marginTop: '20px',
    width:  '120px',
    height: '35px',
    backgroundColor: 'blue',
    color: 'orange',
    fontSize: '.75rem'
}

export default TravelButton;
