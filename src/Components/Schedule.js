import React, { Component } from 'react';

class Schedule extends Component {
  render() {

    if(this.props.data){
      var schedule = this.props.data.schedule.map(function(s) {
          return <div key={s.time}><h3>{s.time}</h3>
              <ul>
                  <p>{s.goals.map(g => <li>{g}</li>)}</p></ul>
          </div>
      })
    }

    return (
      <section id="schedule">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Schedule </span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {schedule}
               </div>
            </div>
         </div>
      </div>
   </section>
    );
  }
}

export default Schedule;
