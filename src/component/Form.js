import React from 'react';

import Task from './Task'

class Form extends React.Component{
    state={
        list:[],
        addTodo:'',
        
        check:false,
    }
    myChangeHandler=(event)=>{
        this.setState({
            addTodo:event.target.value
        })
    }
    addElement=()=>{
        const list= this.state.list
        const addTodo=this.state.addTodo
        this.setState({
            list:[...list,addTodo],
            addTodo:" ",
           
        },
        ()=>console.log(this.state.list))
    }
    deleteElement=(index)=>{
        const list = this.state.list
        list.splice(index,1)
        this.setState({
            list:list,
        })
    }
    checkElement=()=>{
        this.setState({
            check:true,
        })
    }
    

    render (){
        const list= this.state.list
        const plural=this.state.list.length<2
        return(
        <div>
           <p className={plural? 'uk-text-success':'uk-text-warning'}> {list.length} {plural?  'chose à faire'  :  'choses à faire'} </p>
               
            
            
            <input className="uk-input  uk-form-width-medium" value={this.state.addTodo} type="text" id='addTodo' placeholder='ajouter quelque chose' onChange={this.myChangeHandler}></input>
            <button className="uk-button uk-button-primary" id="add" onClick={this.addElement}>Ajouter</button>
            <ul>
                {list.map((task,index)=>{
                    return<li className="form-success" key={index}>
                        <Task  task={task}/> 
                        <button id="delete" className="uk-button uk-button-danger" onClick={this.deleteElement.bind(this,index)}>Supp</button>
                        <hr class="uk-divider-icon"></hr>
                        </li>
                })}
            </ul>

        </div>
        
    )}
}


export default Form



