import React, { Component } from 'react';

class Milestone extends Component {
    render() {

        // if(this.props.data){
        //     var links = this.props.data.milestone.map(function(s) {
        //         return <div key={s.time}><h3>{s.time}</h3>
        //             <ul>
        //                 <p>{s.goals.map(g => <li>{g}</li>)}</p></ul>
        //         </div>
        //     })
        // }

        return (
            <section id="milestone">

                <div className="row">
                    <div className="three columns header-col">
                        <h1><span>Milestone </span></h1>
                    </div>

                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                                <a href="https://ultroy.com/184finalproject/milestone_report.pdf"> Status Report </a>
                            </div>
                        </div>
                        <div className="row item">
                            <div className="twelve columns">
                                <a href="https://youtu.be/FfF1HixXaRA"> Milestone Video </a>
                            </div>
                        </div>
                        <div className="row item">
                            <div className="twelve columns">
                                <a href="https://docs.google.com/presentation/d/1IvUkXLPI4P4arEbRWPvC2Ep_Rl-l7xf9NE4YCaY70rU/edit?usp=sharing"> Milestone Slides</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Milestone;
