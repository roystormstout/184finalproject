import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
        var descriptions = this.props.data.description.map(d => <p>{d}</p>);

    }

    return (
      <section id="description">
          <div className="row">
          <h2 className=" columns main-col">Project Description</h2>
          </div>
      <div className="row">
         <div className=" columns main-col">
             {descriptions}
         </div>
      </div>
   </section>
    );
  }
}

export default About;
