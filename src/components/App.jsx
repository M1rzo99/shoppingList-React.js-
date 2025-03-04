 import Filter from "./filter"
import ShoppingAddForm from "./shoping-add-form"
import ShoppingList from "./shopping-list"
import Information from './information'

function App() {
  const data = [
    {
      id:1,
      size:14,
      title:"Buy Bananas",
      active:false
    },
    {
      id:2,
      size:11,
      title:"Buy Kiwi",
      active:true 
    },
    {
      id:3,
      size:10,
      title:'Buy Milk',
      active:false
    },
   
  ]
  return (
    <>
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
    </>
    
  )
}

export default App
