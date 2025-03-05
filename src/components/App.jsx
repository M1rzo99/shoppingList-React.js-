 import Filter from "./filter"
import ShoppingAddForm from "./shoping-add-form"
import ShoppingList from "./shopping-list"
import Information from './information'
import React from "react"
import { arr } from "../constants"  
class App extends React.Component {
  constructor(props){
    super(props)
   this.state= {
    data:arr
   }} 
  
  render(){
    const  {data}=this.state
    return (
  <div className="app">
    <div className="wrapper">
      <div className="card"> 
      <Information/>
      <ShoppingAddForm />
        <ShoppingList data={data}/> 
        <Filter/>
      </div>
      <img src="/earth.svg" alt="svg" />
    </div>
  </div>
  )
}
}


export default App