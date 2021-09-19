import React from "react";

class ChildComponent extends React.Component{

    state = {
        showJobs:false
    }

    handleShowHide = () =>{
        this.setState({
            showJobs : !this.state.showJobs
        })
    };

    handleOnclickDelete = (job) =>{
        alert("You deleted Job ")
        this.props.deleteAJob(job)
    };

    render() {
        console.log(`Props Data >>>`,  this.props.arrJobs);
        let abc  = this.props.arrJobs; // Cái này là code js. Đọc document https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbmU3cU5mNlBaR2dyUGhoUDB6RDZpVk53YWNKQXxBQ3Jtc0tuaERDcFMySk5KTW5VNzZKMUlpbEpsOC1Pd1RxbVExZHM2bGlReXpnamliMXM4UDZtZlpSbXgwNmxETGV5OTNtLUZZVEUtNWc3a2tBR2pGbFI0dl9ZUE91ajV6Y3dPRDQ4VzZIOUxWaFpOMzhUVXBUaw&q=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FJavaScript%2FReference%2FOperators%2FDestructuring_assignment
        let showJobs = this.state.showJobs;
        return (
            <>
                { showJobs === false &&
                <div>
                    <button onClick = {() => this.handleShowHide()}>Show</button>
                </div>}
                { showJobs === true &&
                    <>  
                        <div className = "job-lists" >
                    {
                        abc.map((items, index) =>{
                            return (
                                <div key = {items.id}>
                                    {items.title} - {items.salary} <></><></> <span onClick={()=>this.handleOnclickDelete(items)}>X</span>
                                </div>
                            )
                        })
                    }
                    </div>
                        <div><button onClick = {() => this.handleShowHide()}>Hide</button></div>
                    </>
                }
            
            </>
        )
    };
}

export default ChildComponent;