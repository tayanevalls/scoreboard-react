import React from 'react';

import Time from './Time';
import Partida from './Partida';

import { Container, Row, Col, Card , CardBody,
    CardTitle, Badge } from 'reactstrap';



export default class PlacarContainer extends React.Component{

    constructor(){
        super();
        this.state ={
            gols_casa : 0,
            gols_visitante: 0,
        };
    }

    marcarGolCasa(){
        this.setState({
            gols_casa: this.state.gols_casa + 1,
        })
    }

    marcarGolVisitante(){
        this.setState({
            gols_visitante: this.state.gols_visitante + 1,
        })
    }

    render(){
       const { partida, casa, visitante } = this.props

        return(
            <Container>
                <Row>
                    <Col md={4}>
                    <Card>
                        <CardBody>
                            <CardTitle><Badge color="info">Mandante</Badge></CardTitle>
                            <div>
                                    <Time nome={casa.nome} 
                                    gols={this.state.gols_casa} 
                                    marcarGol={this.marcarGolCasa.bind(this)}/>
                            </div>
                        </CardBody>
                    </Card>
                    </Col>
                    <Col md={4}>
                        <Partida {...partida}/>
                    </Col>
                    <Col md={4}>
                    <Card>
                        <CardBody>
                        <CardTitle><Badge color="info">Visitante</Badge></CardTitle>
                            <div>
                                    <Time nome={visitante.nome} 
                                    gols={this.state.gols_visitante} 
                                    marcarGol={this.marcarGolVisitante.bind(this)}/>
                            </div>
                        </CardBody>
                    </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}