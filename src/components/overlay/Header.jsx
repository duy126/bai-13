import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return <div><div style={{position:'relative',height:'20vh',width:'100%'}}>
    <div style={{position:'absolute',height:'100%',width:'100%',background:'rgba(0,0,0,0.4)'}}></div>
    <div style={{position:'absolute', height:'100%',width:'100%',textAlign:'center',color:'white',display:'flex',alignItems:'center',justifyContent:'center'}}><h2>TRY GLASS APP ONLINE</h2></div>
    </div>
   </div> 
    
    
    
   
  }
}
