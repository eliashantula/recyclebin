import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import groceryItem from "./reducers";
import CartContainer from "./cartcontainer.js";
import { connect } from "react-redux";
import serialize from "form-serialize";
import {addShopping} from './actions'

class ShopButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			amount: "",
			item: ""
		};
	}

	render() {
		
		return (
			<Form onSubmit={this.props.checkSubmits} className="testing">
				<FormGroup className="shoppingButton"
				
				>
					<Input className="quantity"
						type="number"
						name="amount"
						placeholder={0}
						
					/>
					<Input 
					type="hidden"
					name="company"
					defaultValue={this.props.item.company} />
					<Input 
					type="hidden"
					name="price"
					defaultValue={this.props.item.price} />
					<Input
					type="hidden"
					name="item"
					defaultValue={this.props.item.type} />
					<Button
						type="submit"
						color="primary"
						/*id={this.props.item}*/
						size="sm"
					>
						Add To List
					</Button>
					<Button color="info" size="sm">
						Suggest Recipe
					</Button>
				</FormGroup>
			</Form>
		);
	}
}

const mapStateToProps = state => {
	return {
		list: state.list
	};
};
const mapDispatchToProps = dispatch => {
	return {
		checkSubmits: e => {
			e.preventDefault();
			const form = e.target;
			const data = serialize(form, { hash: true });
			dispatch(addShopping(data))
			form.reset();
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopButton);