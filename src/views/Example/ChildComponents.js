import React from "react";

class ChildComponent extends React.Component{


    render() {
        console.log(`Props Data >>>`, this.state);
        let { name , age } = this.props // Cái này là code js. Đọc document https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbmU3cU5mNlBaR2dyUGhoUDB6RDZpVk53YWNKQXxBQ3Jtc0tuaERDcFMySk5KTW5VNzZKMUlpbEpsOC1Pd1RxbVExZHM2bGlReXpnamliMXM4UDZtZlpSbXgwNmxETGV5OTNtLUZZVEUtNWc3a2tBR2pGbFI0dl9ZUE91ajV6Y3dPRDQ4VzZIOUxWaFpOMzhUVXBUaw&q=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FJavaScript%2FReference%2FOperators%2FDestructuring_assignment

        return (
          
            <div> Toi co dieu muon noi. {age} </div>
           
        )
    };
}

export default ChildComponent;