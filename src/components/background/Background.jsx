import React, { Component } from 'react'
import  background from "./background.jpg"

export default class Background extends Component {
  render() {
    return (
       <div style={{position:'absolute',height:'100vh',width:'100%'}}>
        <div style={{position:'absolute',height:'100vh',width:'100%',background:'rgba(0,0,0,0.4)'}}></div>
        <img src={background} style={{height:'100vh',width:'100%',backgroundSize:"cover",backgroundPositionY:"20%",}} alt="" />
        </div>
    )
  }
}
