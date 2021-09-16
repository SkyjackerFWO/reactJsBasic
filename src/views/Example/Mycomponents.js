import React from "react";
import ChildComponent from "./ChildComponents";

class MyComponent extends React.Component{

    state = {
        fristName : '',
        lastName : '',
        arrJobs : [
            {id : 'abcJob1', title : "Tester", salary : "500$"},
            {id : 'abcJob2', title : "Developer", salary : "1000$"},
            {id : 'abcJob3', title : "Manager", salary : "2000$"}
        ]
      
    };

    handleChangeFirstName = (event) =>{
        this.setState({
            fristName: event.target.value
        })
    };

    handleChangeLastName = (event) =>{
        this.setState({
            lastName: event.target.value
        })
    };

    handleSubmit = (event) =>{
        event.preventDefault()
        alert("Ban da an submit thanh cong")
    }

    render() {
        console.log(`Call render >>>`, this.state);
        return (
            <>
                <div>
                    Hello HTML Form
                </div>
                <form>
                    <label htmlFor="fname">First name:</label><br/>
                    <input 
                        type="text"  
                        value={this.state.fristName}
                        onChange = {(event) => this.handleChangeFirstName(event)} 
                    /><br/>
                    <label htmlFor="lname">Last name:</label><br/>
                    <input 
                        type="text"  
                        value={this.state.lastName}
                        onChange = {(event => this.handleChangeLastName(event))}
                    /><br/><br/>
                    <input
                        type="submit" 
                        onClick = {(event) => this.handleSubmit(event)}
                    />
                </form>

                <ChildComponent
                    arrJobs = {this.state.arrJobs}
                />
            </>
        )

        
    };
}

export default MyComponent;