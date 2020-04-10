import React, { Component } from 'react';

class Resources extends Component {
  render() {

    if(this.props.data){
      var resource = this.props.data.resource.map(function(re){
        return <div key={re.category}><h3>{re.category}</h3>
            <ul>
                <p>{re.item.map(i => <li>{i}</li>)}</p></ul>
        </div>
      })
    }

    return (
      <section id="resources">
      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Resources </span></h1>
         </div>

         <div className="nine columns main-col">
					  {resource}
			</div>
      </div>
   </section>
    );
  }
}

export default Resources;
