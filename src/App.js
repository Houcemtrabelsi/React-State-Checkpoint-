import React from "react";
import Profile from "./Profile";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      
      Show: false,
      Person: {
        fullName: "Houcem Trabelsi",
        bio: "this is my bio",
        imgSrc: "logo512.png",
        profession: "Web developer",
      }
      ,
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div><button onClick={()=>this.setState({
             Show : !this.state.Show,
      
          })} >Show profile</button>
          </div>


          <Profile
            fullName={this.state.Show ? this.state.Person.fullName : ""}
            bio={this.state.Show ? this.state.Person.bio:""}
            imgSrc={this.state.Show ? this.state.Person.imgSrc:""}
            profession={this.state.Show ? this.state.Person.profession:""}
          />
          
        </header>
      </div>
    );
  }
}

export default App;
