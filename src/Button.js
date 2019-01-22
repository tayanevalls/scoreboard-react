import React from 'react';

import { Button } from 'reactstrap';
import { FaPlusCircle } from 'react-icons/fa';

export default class BotaoGol extends React.Component{

    handleClick(event){
        event.preventDefault();
        this.props.marcarGol();
    }


    render(){
        return(
            <Button color="link" href="#" onClick={this.handleClick.bind(this)}>
                <FaPlusCircle color="secondary" size="2em"  />
            </Button>

        );
    }
}