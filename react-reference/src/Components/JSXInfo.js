import React, {Component} from 'react';

class JSXInfo extends Component{

    render(){


        return(

            <div className="jsx-info">
            
            <h3>JSX Info</h3>
            <p>he first part of a JSX tag determines the type of the React element.

Capitalized types indicate that the JSX tag is referring to a React component. These tags get compiled into a direct reference to the named variable, so if you use the JSX Foo /> expression, Foo must be in scope.

</p>
            
            </div>
        )
    }

}
export default JSXInfo;