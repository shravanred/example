import { Component } from "react";


class ButtonComponentClass extends Component{
    state={
        text1:"subscribe",
        text2:" subscribed",
        isSubscribed: true,
    }; 
    
    subscribeHandler=()=>{
        console.log("Button Clicked")

        this.setState({
            isSubscribed: !this.state.isSubscribed
            
        }); 

        console.log(this.state.isSubscribed)
    };

    render(){
        return <>
        <button onClick={this.subscribeHandler}>
            {this.state.isSubscribed?this.state.text2:this. state.text1}
             </button>
        </>
    }
}


export default ButtonComponentClass
