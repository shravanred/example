import { Component } from "react";
import { Heading1 } from "../../heading/heading";
import { Buttonstyle } from "../../button/button";

class TodoComponentClass extends Component{
    state={
        todos:["i woke up at 7 am","i had my lunch "]
    };

    todoHandler=()=>{
            this.setState({
                todos:[...this.state.todos,"i sleep at 10"]
            });
    }
 
    todoupdateHandler=(index)=>{
            let newtodo=this.state.todos;
            newtodo[index]="I woke up at 6 am";
        
            this.setState({
                todos:newtodo
            });

    }

    tododeleteHandler=(index)=>{
        let newtodos=this.state.todos.filter((eachtodo,i)=>index!=i);
        this.setState({
            todos:newtodos
        });

    }
    render(){
        return(
            <>
            <Heading1 title="List Of Todos"/>
            <ol>
            {this.state.todos.map((each,index)=>{
                return<>
                    <li>{each}</li>
                    <Buttonstyle text={"Update Todo"} onPress={()=>this.todoupdateHandler(index)} bgColor="blue"/>
                    <Buttonstyle text={"Delete Todo"} onPress={()=>this.tododeleteHandler(index)} bgColor="Red"/>
                </>
            })}
            </ol>
            <Buttonstyle text={"ADD Todo"} onPress={this.todoHandler} width="100" height="50" bgColor="green"/>
            </>
        )
    }
}

export default TodoComponentClass;