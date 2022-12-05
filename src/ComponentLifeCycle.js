import React from'react';
class ComponentLifeCycle extends React.Component{
    constructor(){
        super();
        this.state = [{
            count :0
        }
    

        ]
    }
    render(){
        return(
            <div>
            <h1> component LifeCycle Demo</h1>
            <h2>counter:{this.state.count}</h2>
            <button type="submit" onclick={this.incrementCounter} >Increament</button>
            </div>
        );
    }


};

export default ComponentLifeCycle;