import React from 'react';

class UnControlledComponent extends React.Component{


    constructor(){
        super();
        this.userName = React.createRef()
    
    }
    handleSubmit =()=> {
        alert(this.userName.current.value);

    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <fieldset>
                    <legend>Name Informtion</legend>
                <h1> React Uncontrolled Component Demo</h1>
                <label> Name</label>
                <input type="text" ref={this.userName}  />
                <button type="submit">Submit</button>
                </fieldset>
                </form>
        );
    }
}

export default UnControlledComponent;