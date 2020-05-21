import React, { Component } from 'react'
import './TodoApp.css'




export default class TodoApp extends Component {
    state={
        input:'',
        items:[],
        
    }
    handleChange=(event)=>{
        this.setState({
            input:event.target.value
        });
        
    };
    storeItems=(event)=>{
        event.preventDefault();
        const{ input }=this.state;
        
        this.setState({
            items:[...this.state.items, input],
            input:''
        });


    };

    deleteItem=(index)=>{
        const allItems = this.state.items;
        allItems.splice(index,1);
        this.setState({
            items:allItems,
        })


    };

    
   
    
    render() {
        const{input,items}=this.state;
        
        
        return (
            <div className='Todo-container'>
                
                <form className='input-section' onSubmit={this.storeItems}>
                    <h1> TodoApp</h1>
                    <input value={input} onChange={this.handleChange}   type="text"
                    placeholder='Enter Items...'/>

                    
                </form>
                <ul>
                    {items.map((data,index)=>(
                        <li key={index}>{data} <i  className="fas fa-trash-alt" onClick={() => this.deleteItem(index)}></i></li>
                    ))}
                </ul>

               
                
            </div>
        )
    }
}
