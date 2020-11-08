import React, { Fragment } from 'react'

import ScheduleCard from './ScheduleCard';
import  res from '../../dummyData';

const ScheduleCards = () => {
    return (
        <Fragment>
            <div>
            {res.data.task.map((task) => (
            <ScheduleCard date={task.date}  name={task.name} start={task.start_time} end={task.end_time} />
            )
)}
            </div>
        </Fragment>
    )
}

export default ScheduleCards
