import React from 'react';

import { Container, Col, Row, Badge } from 'reactstrap';

import Button from './Button';

export default class Team extends React.Component{

    render(){
        return(
            
            <Container>
                <Row>
                    <Col md={12}>
                    <h1>{this.props.name}</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <h1><Badge color="dark" size="2em"> {this.props.gols}</Badge></h1>
                    </Col>
                </Row> 
                
                <Row>
                    <Col md={12}>
                        <Button marcarGol={this.props.marcarGol}/>
                    </Col>
                </Row> 
            </Container>

        );
    }
}