import React, { Component } from 'react'
import Header from './Header'
import model from './img/model.jpg'


export default class Overlay extends Component {
  state ={
    urlImg:"./glassesImage/v1.png",
  }
  render() {
    return  <div style={{height:'100vh',width:'100%',position:"absolute"}}>
        <Header></Header>
        <div className='container p-5 d-flex h-50 '>
            <div className='d-flex justify-content-center w-100'>
                <img src={model} height={300} alt="" style={{position:'absolute'}}/>
                <img src={this.state.urlImg} alt="" style={{position:'absolute',marginTop:'60px'}} width={150} />
                </div>
        </div>
        <div className='container p-5 d-flex justify-content-around' style={{background:'white',height:'20%'}}>
          <button onClick={()=>{
            this.setState({urlImg:'./glassesImage/v1.png'})
          }}><img src="./glassesImage/g1.jpg" width={50} height={40} alt="" /></button>
           <button onClick={()=>{
            this.setState({urlImg:'./glassesImage/v2.png'})
          }}><img src="./glassesImage/g2.jpg" width={50} height={40} alt="" /></button>
           <button onClick={()=>{
            this.setState({urlImg:'./glassesImage/v3.png'})
          }}><img src="./glassesImage/g3.jpg" width={50} height={40} alt="" /></button>
           <button onClick={()=>{
            this.setState({urlImg:'./glassesImage/v4.png'})
          }}><img src="./glassesImage/g4.jpg" width={50} height={40} alt="" /></button>
           <button onClick={()=>{
            this.setState({urlImg:'./glassesImage/v5.png'})
          }}><img src="./glassesImage/g5.jpg" width={50} height={40} alt="" /></button>
           <button onClick={()=>{
            this.setState({urlImg:'./glassesImage/v6.png'})
          }}><img src="./glassesImage/g6.jpg" width={50} height={40} alt="" /></button>
           <button onClick={()=>{
            this.setState({urlImg:'./glassesImage/v7.png'})
          }}><img src="./glassesImage/g7.jpg" width={50} height={40} alt="" /></button>
           <button onClick={()=>{
            this.setState({urlImg:'./glassesImage/v8.png'})
          }}><img src="./glassesImage/g8.jpg" width={50} height={40} alt="" /></button>
           <button onClick={()=>{
            this.setState({urlImg:'./glassesImage/v9.png'})
          }}><img src="./glassesImage/g9.jpg" width={50} height={40} alt="" /></button>
          
          </div>
    </div>
    
  }
}
