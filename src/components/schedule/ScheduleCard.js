import React, { Fragment } from 'react'

const ScheduleCard = ({ date, name, start ,end }) => {
    return (
        <Fragment>
        <div style={card}>
            <div style={dateCard}>
                {date}
            </div>
            <div>
                <h3>{name}</h3>
                <div>
                    {start} to {end}
                </div>
            </div>
        </div>
        </Fragment>
    )
}

const card = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop:  "20px",
    border: "1px solid black"
}

const dateCard = {
    backgroundColor: 'pink',
    border: "0.5px",
    padding: "20px",
    minHeight:"30px",
    maxWidth: '100px',
    margin: "20px"
}

export default ScheduleCard
