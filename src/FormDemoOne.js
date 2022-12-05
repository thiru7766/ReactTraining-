import React from 'react';
import { Form } from 'react-bootstrap';


class FormDemo extends React.Component{
    constructor(){
        super();
        this.state={
            fname:"",
            lname:"",
            gender:"",
            dob:"",
        }
    }
    handleChange= (event)=> {
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    handleSubmit= (event) => {
        event.preventDefault();
        console.log('F.Name :',this.state.fname);
        console.log('L Name :',this.state.lname);
        console.log('DOB :',this.state.dob);
        console.log('Gender :',this.state.gender);
    }

render() {
    return(
        <form onSubmit={this.handleSubmit}>
            <Form.Group>
            <Form.Label for="fname">First Name </Form.Label>
            <Form.Control type="text" name="fname" id="fname" value={this.state.fname}  required pattern='[a-zA-Z]+' onChange={this.handleChange}/>
            <br></br>
            </Form.Group>

            <Form.Group>
            <Form.Label for="lname">Last Name</Form.Label>
            <Form.Control type="text" name="lname" id="lname" value={this.state.lname} required pattern ='[a-zA-Z]+' onChange={this.handleChange}/>
            <br></br>
            </Form.Group>

            <Form.Group>
            <Form.Label for="gender">Gender</Form.Label>
            <Form.Check  inline type="radio" name="gender" id="gender" value="Male"  required onChange={this.handleChange}/> <From.Label>Male</Form.Label>
            <Form.Check  inline ltype="radio" name="gender" id="gender" value="Female" required onChange={this.handleChange}/> <From.Label>Female</From.Label>
            </Form.Group>

            <Form.Group>
            <Form.Label for="dob" >Date Of Birth</Form.Label>
            <Form.Control type="date" name ="dob" id="dob" value={this.state.dob} required onChange={this.handleChange}/>
            </Form.Group>

            <div>
            <button type="submit" >Submit</button>
            </div>

        </form>
    )
}

}
export default FormDemo;