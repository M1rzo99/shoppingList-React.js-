import React from "react"
class ShoppingAddForm extends React.Component{
	constructor(props){
		super(props)
		this.state={
			title:'Buy',
			number:'0'
		}
	}
	onChange = (e)=>{this.setState({[e.target.name]: e.target.value})}
	render(){
		const {number,title} = this.state
		return (
			<div className='form'>
				<input
				 type="text" 
				 className='title'
				  placeholder='Title...'
				  name='title'
				  onChange={this.onChange}
				  value={title} />

				<input 
				type='number'
				 className='number'
				  placeholder='14'
				  name="number" 
				  onChange={this.onChange}
				  value={number}/>
				  
				<button>Add</button>
			</div>
		)
	}
}

export default ShoppingAddForm