import React, {Component} from 'react';
import ComponentInfo from './ComponentInfo';
import PropsInfo from './PropsInfo';
import StateInfo from './StateInfo';
import LifeCycleInfo from './LifeCycleInfo';
import JSXInfo from './JSXInfo';

class Content extends Component{

    render(){

        return(

            <div className="container">
            <ComponentInfo/>
            <PropsInfo/>
            <StateInfo/>
            <LifeCycleInfo/>
            <JSXInfo/>
            </div>
        )
    }
}


export default Content;