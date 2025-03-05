 import Filter from "./filter"
import ShoppingAddForm from "./shoping-add-form"
import ShoppingList from "./shopping-list"
import Information from './information'
import React from "react"
import { arr } from "../constants"  
import  { v4 as uuidv4 } from 'uuid'
class App extends React.Component {
  constructor(props){
    super(props)
   this.state= {
    data:arr,
    maxId:4
   }} 
  
   //NOTE - delete function(app.jsx=>shoping-list=>shopping-list-item larda ham chaqirilingan);
   onDelete =(id)=>{
    const newArr = this.state.data.filter(item=> item.id !==id)
    this.setState({
      data: newArr
      
   })
   }

   onToggleActive=(id)=>{
    const newArr =this.state.data.map(item=>{
      if(item.id === id){
        return{...item,active: !item.active}
      }
      return item
    })
    this.setState({
      data:newArr
    })
    
    
   }

   onAdd = (item)=>{
    const {title,number}=item
    const newData = {title,size:number,active:false,id:uuidv4()}
    const newArr = [...this.state.data,newData]
    this.setState({
      data:newArr
    })
   }

  render(){
    const{data}=this.state
    return (
  <div className="app">
    <div className="wrapper">
      <div className="card"> 
      <Information length={data.length}/>
      <ShoppingAddForm
      onAdd={this.onAdd}
      />
        <ShoppingList 
        data={data}
        onDelete={this.onDelete}
        onToggleActive={this.onToggleActive}
        /> 
        <Filter/>
      </div>
      <img src="/earth.svg" alt="svg" />
    </div>
  </div>
  )
}
}


export default App