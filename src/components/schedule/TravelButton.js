import React from 'react';

import { Link } from 'react-router-dom';

const TravelButton = ({content}) => {

    var link;

    if(content === "Create Schedule"){
        link = "/form"
    } else if(content === "Next"){
        link = "/form2"
    }
    return (
        <div>
          <Link to={link}><button style={traveller}>{content}</button> </Link>
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
