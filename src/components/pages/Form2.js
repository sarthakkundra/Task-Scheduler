import React, { useState } from "react";

import { Form, Col } from "react-bootstrap";

const Form2 = () => {
	const [userId, setUserId] = useState(1);
	const [startTime, setStartTime] = useState();
	const [endTime, setEndTime] = useState();

	const changeTime = (e)  => {
			setStartTime(e.target.value)
			console.log(startTime)
	}
	return (
	
		<div>
			<Form.Group controlId='startTiming'>
				<h3>Start Time</h3>
				<Form.Row>
					<Col>
						<h5>Hr</h5>
						<Form.Control placeholder='00-24' onChange= {changeTime} />
					</Col>
					<Col>
						<h5>Min</h5>
						<Form.Control placeholder='00-60' />
					</Col>
					<Col>
						<h5>AM/PM</h5>
						<Form.Control placeholder='PM' />
					</Col>
				</Form.Row>
			</Form.Group>
			<Form.Group controlId='endTiming'>
				<h3>End Time</h3>
				<Form.Row>
					<Col>
						<h5>Hr</h5>
						<Form.Control placeholder='00-24' />
					</Col>
					<Col>
						<h5>Min</h5>
						<Form.Control placeholder='00-60' />
					</Col>
					<Col>
						<h5>AM/PM</h5>
						<Form.Control placeholder='PM' />
					</Col>
				</Form.Row>
			</Form.Group>
		</div>
	);
};

export default Form2;
