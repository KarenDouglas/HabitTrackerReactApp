import React from 'react';
import { Container, Row, Col, Input, Button, Form } from 'reactstrap';

const Welcome = (props) => {
    return (
        <Container>
            <Row className="row masthead">
                <Col className="col">
                    <h1 className="jumbotxt offset-4">Habit / Tracker</h1>
                    <p className="jumbotxt-body d-xs-none d-md-block offset-4">Make habits easy.</p>
                </Col>
            </Row>
            <Row className="row">
                <Col className="col-lg-12">
                    <Form action="#" className="row">
                        <Col className="col-xs-6 col-md algin-self-center offset-3"><Input type="email" id="subInput" className="form-control input" id="email" placeholder="your@email.com" name="email" /></Col>
                        <Col className="col-xs-6 col-md algin-self-center"><Button type="submit" id="subButton" className="btn btn-info btn">Subscribe</Button></Col>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Welcome;