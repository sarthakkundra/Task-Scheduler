import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import Navbar from '../views/Navbar';
import TravelButton from '../schedule/TravelButton'
import ScheduleCards from '../schedule/ScheduleCards';
import Form1 from '../pages/Form1';
import Form2 from '../pages/Form2';

const Homepage = () => {
    return (
        <Router>
        <div>
            <Switch>
                <Route path="/form2">
                    <Navbar heading={"New Schedule - Step 2"} />
                    <TravelButton content={"Create"} />
                    <Form2 />
                </Route>
            <Route path='/form'>
                <Navbar heading={'New Schedule - Step 1'} />
                <TravelButton content={"Next"} />
                <Form1 />
            </Route>
                <Route path='/'>
            <Navbar heading={'Schedules'}/>
            <TravelButton content={"Create Schedule"}/>
            <ScheduleCards />
            </Route>
           
            </Switch>
        </div>

        </Router>
    )
}

export default Homepage
