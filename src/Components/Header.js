import React, { Component } from 'react';

class Header extends Component {
  render() {

    if(this.props.data){
      var projectName = this.props.data.projectName;
      var names = this.props.data.names.map(name => <span>{ name } &nbsp;&nbsp;</span> );
        var summary= this.props.data.summary;
    }

    return (
      <header id="home">

      <nav id="nav-wrap" className="opaque">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#description">Problem Description</a></li>
	         <li><a className="smoothscroll" href="#goals">Goals</a></li>
             <li><a className="smoothscroll" href="#schedule">Schedule</a></li>
             <li><a className="smoothscroll" href="#resources">Resources</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">Project {projectName}</h1>
             <h2 style={{ color: 'white' }}>{names}</h2>
            <h3>{summary}.</h3>
            <hr />
         </div>
      </div>

   </header>
    );
  }
}

export default Header;
