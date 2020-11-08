import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
}

import Navbar from '../views/Navbar';
import TravelButton from '../schedule/TravelButton'
import ScheduleCards from '../schedule/ScheduleCards';

const Homepage = () => {
    return (
        <div>
            <Navbar heading={'Schedules'}/>
            <TravelButton />
            <ScheduleCards />
        </div>
    )
}

export default Homepage
