import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

import Navbar from '../views/Navbar';
import TravelButton from '../schedule/TravelButton'
import ScheduleCards from '../schedule/ScheduleCards';
import Form1 from '../pages/Form1';

const Homepage = () => {
    return (
        <Router>
        <div>
            <Switch>
            <Route path='/form'>
                <Navbar heading={'form'} />
                <Form1 />
                <TravelButton />
            </Route>
                <Route path='/'>
            <Navbar heading={'Schedules'}/>
            <TravelButton />
            <ScheduleCards />
            </Route>
           
            </Switch>
        </div>

        </Router>
    )
}

export default Homepage
