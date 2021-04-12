import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, CardDeck } from 'reactstrap';
import { Col, Row, Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile } from '@fortawesome/free-solid-svg-icons';
import Apple from '../img/256x2561.png';
import Google from '../img/256x256.png';


const Mobile = (props) => {
    return (
        <Container>
            <Card className="card bg-transparent">
                <Row id="mobilebg" className="row g-0">
                    <Col className=" col-sm-4 col-md-3">
                        <FontAwesomeIcon id="famobile" icon={faMobile} />
                    </Col>
                    <Col className="col-sm-8 col-md-8">
                        <CardBody className="card-body bg-transparent">
                            <CardTitle id="mobile-header" className="card-title">Play Anywhere</CardTitle>
                            <CardText className="blurb-body card-text mb-0">A free habit tracking app, track and record your progress on the go.</CardText>
                            <CardText className=" blurb-body card-text mb-0">Gamify your habits and play anywhere on your solo campaign or with friends.</CardText>
                            <CardText className=" blurb-body card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</CardText>
                            <Col class="col offset-1">
                                <CardImg id="apple" src={Apple} />
                                <CardImg id="google" src={Google} />
                            </Col>
                        </CardBody>
                    </Col>
                </Row>
            </Card>
        </Container>
    );
}

export default Mobile;