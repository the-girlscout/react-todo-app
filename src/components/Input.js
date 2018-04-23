import React, { Component } from 'react';



class Input extends Component {


    constructor(props){
        super(props);
        //this.state = {value: this.props.todoText};
       
       
        //testzwecke
        this.auto = {
            name: 'mazda' //state property
        };
        this.name = 'golf'; //instance property
    }
    


    myInput1 = React.createRef();

    //testzwecke
    //state = { myStateIs: "apfel"};

    //testzwecke
    buttonClicked = () => {
       console.log("Input.js - in buttonClicked - this.myInput.current.value: ", this.myInput1.current.value);      
    };

    //testzwecke
    updateLocalState = () => {
        this.setState({
            myStateIs: "birne"
        })
    }

    addToDoInput = () => {
        console.log("Input.js im updateToDo: ", this.myInput1.current.value);
        //this.setState({value: "wasserball"});        
        this.props.addTodoAppInput(this.myInput1.current.value);
    }

  componentDidMount(){
      console.log("Input.js - myInput1.value: ", this.myInput1.current.value);
     // console.log("Input.js - myInput2.value: ", this.myInput2.value);
     // console.log("Input.js - state1: ", this.state.myStateIs);
      console.log("Input.js - auto.name (state): ", this.auto.name);
      console.log("Input.js - auto.name (instance): ", this.name);
  }

  showState(){
      console.log("Input.js - state2: ", this.myStateIs);
  }

  render() {
  //console.log("this render:", this);
    return (    
        <div>  
            <div>{this.props.title}</div>
            <input 
                type="text" 
                ref={this.myInput1}
                placeholder="insert todo here" 
                onChange={this.handleChange}
                defaultValue="defaultValue input1"               
            />
            {/* <input
                type="text"
                ref={myInput2 => this.myInput2 = myInput2}
                defaultValue="defaultValue input2"
            />*/}
            {/*<button onClick={this.buttonClicked}>Add ToDo</button>*/}
            {/*<button onClick={this.updateLocalState}>Update local state</button>*/}
            <button onClick={this.addToDoInput}>Add ToDo</button>
        </div>
    );
  }
}

export default Input;
