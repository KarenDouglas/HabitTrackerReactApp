import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, CardDeck } from 'reactstrap';
import Trackit from '../img/trackit.jpg';
import Progress from '../img/progress.jpg';
import Friends from '../img/gameover.jpg';

const Feature = (props) => {
    return (
        <div className="container">
            <CardDeck id="features" className="card-deck">
                <Card className="card bg-transparent">
                    <CardImg className="card-img-top" src={Trackit} />
                    <CardBody className="card-body">
                        <CardTitle className="card-title">Add Habits</CardTitle>
                        <CardText className="d-xs-none d-md-block card-text">Heade the hero's call, add your habits to begin your quest!</CardText>
                    </CardBody>
                </Card>
                <Card class="card bg-transparent">
                    <CardImg className="card-img-top" src={Progress} />
                    <CardBody className="card-body">
                        <CardTitle className="card-title">Check Your Progress</CardTitle>
                        <CardText className="d-xs-none d-md-block card-text">Track progression with live metrics! Meet your goals to gain INFINITE POWER!</CardText>
                    </CardBody>
                </Card>
                <Card className="card bg-transparent">
                    <CardImg className="card-img-top" src={Friends} />
                    <CardBody className="card-body">
                        <CardTitle className="card-title nowrap">Play with Friends!</CardTitle>
                        <CardText className="d-xs-none d-md-block card-text">Battle your friends or group up to defeat monsters!</CardText>
                    </CardBody>
                </Card>
            </CardDeck>
        </div>
    );
}

export default Feature;