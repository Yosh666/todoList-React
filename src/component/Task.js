import React from 'react';
class Task extends React.Component{
    constructor(props){
        super(props);
        this.state={
            task:props.task,
            check:false,
        }
    }
    checkElement=()=>{
        this.setState({
            check:true,
        })
    }
    render(){
        return(
            <span className={this.state.check? 'checked':''}> <button id="check" className={this.state.check? ' done ':'uk-button uk-button-primary'} onClick={this.checkElement.bind(this)}> Done </button> -- {this.state.task} -- </span>
        )
        
    }

}
export default Task