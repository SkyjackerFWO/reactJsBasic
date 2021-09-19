import React from "react";
import ChildComponent from "./ChildComponents";
import AddComponents from "./AddComponents";

class MyComponent extends React.Component{

    state = {
        arrJobs : [
            {id : 'abcJob1', title : "Tester", salary : "500$"},
            {id : 'abcJob2', title : "Developer", salary : "1000$"},
            {id : 'abcJob3', title : "Manager", salary : "2000$"}
        ]
      
    };

    addNewJob = (job) =>{
        console.log('Check data from form', job)
        this.setState({
            arrJobs : [...this.state.arrJobs, job]
        })
    };

    deleteAJob = (job) => {
        let currentJobs = this.state.arrJobs;
        currentJobs = currentJobs.filter(item => item.id !== job.id);
        this.setState({
            arrJobs : currentJobs
        })

    };

    render() {
        console.log(`Call render >>>`, this.state);
        return (
            <>
                <AddComponents 
                    addNewJob = {this.addNewJob}
                />

                <ChildComponent
                    arrJobs = {this.state.arrJobs}
                    deleteAJob = {this.deleteAJob}
                />
            </>
        )

        
    };
}

export default MyComponent;