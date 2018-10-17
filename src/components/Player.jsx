// Player.jsx
import React, { Component } from 'react';
import './Player.css';




class Player extends Component {
constructor(props){
  super(props),
  this.state={
    infoPlayer :false,

  }
}

showInfoPlayer(){
   this.setState({
    infoPlayer :true,
  })}

  hiddenInfoPlayer(){
     this.setState({
      infoPlayer :false,
    })}

    handleClick = () =>{
        if(this.props.isAttackable)
          this.props.playerAttacked(this.props.index,50)
      }

  render() {
    const { index,x, y, avatar ,playerAttacked,pv} = this.props
    return (

      <div>
        <div className="Player"
          onClick={()=>this.handleClick() } onMouseOver={() => this.showInfoPlayer()} onMouseOut={() => this.hiddenInfoPlayer()}
          style={{ top: x * 100, left: y * 100, backgroundImage: 'url(' + avatar + ')' }}>
          {this.state.infoPlayer ? <div className="infoPlayer" style={{color:'white',fontWeight:'bold', height:'20px',width:'50px', backgroundColor:'Black', borderRadius:'3px', textAlign:'center', margin:'-25px 29px'}}>{pv}</div> : null}
        </div>
      </div>



    );
  }

}


export default Player;
