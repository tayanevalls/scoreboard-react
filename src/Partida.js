import React from 'react';

import { FaRegCalendarAlt, FaClock, FaCloud, FaFutbol  } from 'react-icons/fa';

import { Badge, Row, ListGroup, ListGroupItem, Col } from 'reactstrap';

export default class Partida extends React.Component{

    render(){
        return(
            <div>
                <Row>
                    <Col md={12}>
                        <Badge pill variant="primary">{this.props.estadio}</Badge>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}><br />
                        <ListGroup>
                            <ListGroupItem className="justify-content-between text-left">
                                <FaRegCalendarAlt /> <Badge pill color="dark">{this.props.data}</Badge>
                            </ListGroupItem>
                            <ListGroupItem className="justify-content-between text-left">
                                <FaClock /> <Badge pill color="dark">{this.props.horario}</Badge>
                            </ListGroupItem>

                        </ListGroup> 
                    </Col>
                    <Col md={6}><br />
                        <ListGroup>
                            <ListGroupItem className="justify-content-between text-left">
                                <FaCloud /> <Badge pill color="dark">{this.props.clima}</Badge>
                            </ListGroupItem>
                            <ListGroupItem className="justify-content-between text-left">
                                <FaFutbol /> <Badge pill color="dark">{this.props.campeonato}</Badge>
                            </ListGroupItem>

                        </ListGroup>
                    </Col>
                </Row>
            </div>
        );
    }
}