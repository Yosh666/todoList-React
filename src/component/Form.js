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
           <p> {list.length} {plural?  'chose à faire'  :  'choses à faire'} </p>
               
            
            
            <input value={this.state.addTodo} type="text" id='addTodo' placeholder='ajouter quelque chose' onChange={this.myChangeHandler}></input>
            <button id="add" onClick={this.addElement}>Ajouter</button>
            <ul>
                {list.map((task,index)=>{
                    return<li><Task key={index} task={task}/> <button id="delete" onClick={this.deleteElement.bind(this,index)}>Supp</button></li>
                })}
            </ul>

        </div>
        
    )}
}


export default Form



