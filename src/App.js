import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Goals from './Components/Goals';
import Schedule from './Components/Schedule';
import Resources from  './Components/Resources';
import Milestone from "./Components/Milestone";

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getResumeData(){
    $.ajax({
      url:'https://ultroy.com/184finalproject/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Goals data={this.state.resumeData.resume}/>
        <Schedule data={this.state.resumeData.resume}/>
        <Resources data={this.state.resumeData.resume}/>
        <Milestone />
      </div>
    );
  }
}

export default App;
