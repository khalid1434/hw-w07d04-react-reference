import React, {Component} from 'react';

class StateInfo  extends Component{

    render(){

        return (

            <div className="state-info">
            <h3>State Info</h3>
            <p>There are ways to validate the presence and type of properties, but there is no such mechanism for state. You, as the developer of a component, are the only person who should know what state your component needs, and the correct data types which should be accepted/provided.</p>
            </div>

        )
    }
}

export default StateInfo;