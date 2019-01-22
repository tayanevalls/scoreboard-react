import React from 'react';

import Team from './Team'; 
import Match from './Match';

import { Container, Row, Col, Card , CardBody,
    CardTitle, Badge } from 'reactstrap';



export default class PlacarContainer extends React.Component{

    constructor(){
        super();
        this.state ={
            gols_home : 0,
            gols_visitor: 0,
        };
    }

    marcarGolHome(){
        this.setState({
            gols_home: this.state.gols_home + 1,
        })
    }

    marcarGolvisitor(){
        this.setState({
            gols_visitor: this.state.gols_visitor + 1,
        })
    }

    render(){
       const { match, home, visitor } = this.props

        return(
            <Container>
                <Row>
                    <Col md={4}>
                    <Card>
                        <CardBody>
                            <CardTitle><Badge color="info">Mandante</Badge></CardTitle>
                            <div>
                                    <Team name={home.name} 
                                    gols={this.state.gols_home} 
                                    marcarGol={this.marcarGolHome.bind(this)}/>
                            </div>
                        </CardBody>
                    </Card>
                    </Col>
                    <Col md={4}>
                        <Match {...match}/>
                    </Col>
                    <Col md={4}>
                    <Card>
                        <CardBody>
                        <CardTitle><Badge color="info">Visitante</Badge></CardTitle>
                            <div>
                                    <Team name={visitor.name} 
                                    gols={this.state.gols_visitor} 
                                    marcarGol={this.marcarGolvisitor.bind(this)}/>
                            </div>
                        </CardBody>
                    </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}