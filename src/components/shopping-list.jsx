import ShoppingListItem from "./shopping-list-item"

const ShoppingList = ({data}) => {
	return (
	data.map(item=>(
		<ShoppingListItem item={item} key={item.id}/>
	))
	)
}

export default ShoppingList