import React from 'react';

import { FaRegCalendarAlt, FaClock, FaCloud, FaFutbol  } from 'react-icons/fa';

import { Badge, Row, ListGroup, ListGroupItem, Col } from 'reactstrap';

export default class Match extends React.Component{

    render(){
        return(
            <div>
                <Row>
                    <Col md={12}>
                        <Badge pill variant="primary">{this.props.stadium}</Badge>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}><br />
                        <ListGroup>
                            <ListGroupItem className="justify-content-between text-left">
                                <FaRegCalendarAlt /> <Badge pill color="dark">{this.props.date}</Badge>
                            </ListGroupItem>
                            <ListGroupItem className="justify-content-between text-left">
                                <FaClock /> <Badge pill color="dark">{this.props.schedule}</Badge>
                            </ListGroupItem>

                        </ListGroup> 
                    </Col>
                    <Col md={6}><br />
                        <ListGroup>
                            <ListGroupItem className="justify-content-between text-left">
                                <FaCloud /> <Badge pill color="dark">{this.props.weather}</Badge>
                            </ListGroupItem>
                            <ListGroupItem className="justify-content-between text-left">
                                <FaFutbol /> <Badge pill color="dark">{this.props.championship}</Badge>
                            </ListGroupItem>

                        </ListGroup>
                    </Col>
                </Row>
            </div>
        );
    }
}