import React, { Component } from 'react';


class Time extends Component {
    state ={
        time:0}
    componentDidMount(){
        setInterval(()=>{
          this.setState({time:this.state.time + 1 })
        },1000)
}
render () {
 return (
    <div className="App">
      <h1>{this.state.time}</h1> 
    </div>
 );}

}
 export default Time;