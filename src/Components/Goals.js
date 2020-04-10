import React, { Component } from 'react';

class Goals extends Component {
  render() {

    if(this.props.data){
      var goals = this.props.data.goals.map(function(goal){
          return <div><ul><li><p>{goal}</p></li></ul></div>
      })

    }

    return (
      <section id="goals">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Goals + </span></h1>
             <h1><span>Deliverables</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {goals}
               </div>
            </div>
         </div>
      </div>


   </section>
    );
  }
}

export default Goals;
