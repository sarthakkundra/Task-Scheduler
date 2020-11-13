import React, { useState } from "react";

import { Form, Button, FormControl, Col } from "react-bootstrap";

const Form1 = () => {
	const [day, setDay] = useState("");
	const [month, setMonth] = useState("");
	const [year, setYear] = useState("");
	const [name, setName] = useState("");

	const changeDay  = (e) => {
		setDay(e.target.value);
	}
	const changeMonth  = (e) => {
		setMonth(e.target.value);
	}
	const changeYear  = (e) => {
		setYear(e.target.value);

		const form1 =  {
			day,
			month,
			year,
			name
		}
	}
	const changeName  = (e) => {
		setName(e.target.value);
	}
	return (
		<div>
			<Form>
				<Form.Group controlId='title'>
					<Form.Label>Title</Form.Label>
					<Form.Control type='text' placeholder='Leadership training 101' onChange={changeName} />
				</Form.Group>
                <Form.Group controlId='timing'>
                    <h3>Date</h3>
				<Form.Row>
					<Col>
                    <h5>Day</h5>
						<Form.Control placeholder='Monday' onChange={changeDay}/>
					</Col>
					<Col>
                    <h5>Month</h5>
						<Form.Control placeholder='January' onChange={changeMonth} />
					</Col>
                    <Col>
                    <h5>Year</h5>
						<Form.Control placeholder='2020' onChange={changeYear} />
					</Col>
				</Form.Row>
                </Form.Group>
			</Form>
		</div>
	);
};

export default Form1;
