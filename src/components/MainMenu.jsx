//App.jsx
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MainMenu.css';



class MainMenu extends Component {

  componentDidMount(){
       const audio = new Audio();
       audio.src = "https://ia800805.us.archive.org/4/items/11TheQuidditchMatch/2001%20-%20Harry%20Potter%20and%20The%20Sorcerer%27s%20Stone/02%20-%20Harry%27s%20Wondrous%20World.mp3";
       audio.volume = '0.5';
       audio.play()
    };
       stopAudio(){
         this.audio.pause();

       };

  render() {
    return (


      <div className='cursor'style={{ height:'595px', width:'1088px', backgroundImage: 'url(https://stmed.net/sites/default/files/harry-potter-wallpapers-29604-4900200.jpg)', backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
      <div style={{ width : '200px', height : '30px', backgroundColor : '#9b1515', borderRadius: '5px', display:'flex', alignItems:'center', justifyContent:'center', position:'fixed', margin:'500px 440px'}}>
      <Link onClick='this.stopAudio()' className='cursor' to='/GameZone' style={{ fontWeight:'bold',color:'white', textDecoration: 'none' }} >New Game</Link>
      </div>

      </div>


    );
  }
}

export default MainMenu;
