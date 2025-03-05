import ShoppingListItem from "./shopping-list-item"

const ShoppingList = ({data,onDelete,onToggleActive}) => {
	return (
	data.map(item=>(
		<ShoppingListItem 
		item={item}
		 key={item.id}
		 onDeleteItem={()=> onDelete(item.id)}
		 onToggleActiveItem={()=> onToggleActive(item.id)}
		 />
	))
	)
}

export default ShoppingList