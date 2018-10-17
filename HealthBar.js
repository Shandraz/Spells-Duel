import React from 'react';
import './HealthBar.css';

class HealthBar extends React.Component {


    constructor(props){
        super(props)
        this.state={
            pvs : props.pvs
        }
        }


    losePoint = (nb) => {
        this.setState({
            pvs : this.state.pvs - nb
        })

    }

    render() {
        return (

            <div 
                className="health-bar" 
                onClick={()=>this.losePoint(10)}>

                <div 
                    style={{width: this.state.pvs, height: '50px', backgroundColor:'green'}}>
                </div>

            </div>
        );

    }


}


export default HealthBar;