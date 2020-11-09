import React from "react";

import { Form, Button, FormControl, Col } from "react-bootstrap";

const Form1 = () => {
	return (
		<div>
			<Form>
				<Form.Group controlId='title'>
					<Form.Label>Title</Form.Label>
					<Form.Control type='text' placeholder='Leadership training 101' />
				</Form.Group>
                <Form.Group controlId='timing'>
                    <h3>Date</h3>
				<Form.Row>
					<Col>
                    <h5>Day</h5>
						<Form.Control placeholder='Monday' />
					</Col>
					<Col>
                    <h5>Month</h5>
						<Form.Control placeholder='January' />
					</Col>
                    <Col>
                    <h5>Year</h5>
						<Form.Control placeholder='2020' />
					</Col>
				</Form.Row>
                </Form.Group>
			</Form>
		</div>
	);
};

export default Form1;
