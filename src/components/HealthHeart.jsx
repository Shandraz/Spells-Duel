import React, { Component } from 'react';



class HealthHeart extends Component {
    constructor(props){
        super(props)
        this.state={
        };

      }


    render(){
        return(
        <div style = {{ position:'fixed', bottom:'286px', left:'245px',height: '100px', width: '100px',backgroundImage: 'url(https://img.lght.pics/23Wj.png)', backgroundRepeat: "no-repeat", backgroundSize:'cover'}}>
        <h1> {this.props.pv} </h1>
        </div>)
    }
}

export default HealthHeart;
