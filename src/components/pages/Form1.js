import React from 'react'

const Form1 = () => {
    return (
        <div>
            <div>
            <label for="name">Name</label>
            <input type="text" id="name"></input>
            </div>

            <h7>Date</h7>
            <label for="name">Day</label>
            <input type="text" id="day"></input>
            <label for="name">Month</label>
            <input type="text" id="month"></input>
            <label for="name">Year</label>
            <input type="number" id="year"></input>
        </div>
    )
}

export default Form1
