import React from 'react';

import { Container, Col, Row, Badge } from 'reactstrap';

import BotaoGol from './BotaoGol';

export default class Time extends React.Component{

    render(){
        return(
            
            <Container>
                <Row>
                    <Col md={12}>
                    <h1>{this.props.nome}</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <h1><Badge color="dark" size="2em"> {this.props.gols}</Badge></h1>
                    </Col>
                </Row> 
                
                <Row>
                    <Col md={12}>
                        <BotaoGol marcarGol={this.props.marcarGol}/>
                    </Col>
                </Row> 
            </Container>

        );
    }
}