 import Filter from "./filter"
import ShoppingAddForm from "./shoping-add-form"
import ShoppingList from "./shopping-list"
import Information from './information'

function App() {
  return (
    <>
<div className="app">
  <div className="wrapper">
    <div className="card"> 
    <Information/>
    <ShoppingAddForm/>
      <ShoppingList/>
      <Filter/>
      
     
    </div>
    <img src="/earth.svg" alt="svg" />
  </div>
</div>
    </>
  )
}

export default App
