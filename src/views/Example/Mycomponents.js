import React from "react";

class MyComponent extends React.Component{

    state = {
        name : `Eric`,
        channel : `HoidanIT`
    };

    handleOnChangeName = (event) =>{
        this.setState({
            name : event.target.value
        })
    };

    handleClickButton = () =>{
        console.log(`hit the button`)
        alert(`click me`)
    };

    render() {
        return (
            <>
                <div className = "frist">
                    <input value={this.state.name} type="text"
                        onChange={(event) => this.handleOnChangeName(event)}
                    />
                </div>
                <div className="second">
                    My youtube channel : {this.state.name}
                </div>
                <div className="third">
                    <button onClick={() => this.handleClickButton()}>Click me</button>
                </div>
            </>
        )
    };
}

export default MyComponent;