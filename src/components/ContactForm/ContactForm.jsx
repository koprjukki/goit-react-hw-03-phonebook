import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

export class ContactForm extends Component {
	state = {
		name: "",
		number: "",
	};

	static propTypes = {
		onSubmit: PropTypes.func.isRequired,
	};

	resetState = () => {
		this.setState({
			name: "",
			number: "",
		});
	};

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({
			[name]: value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.onSubmit({ id: uuidv4(), ...this.state });

		this.resetState();
	};

	render() {
		const { name, number } = this.state;
		const nameInputId = uuidv4();
		const phoneInputId = uuidv4();

		return (
			<form onSubmit={this.handleSubmit}>
				<label>Name</label>
				<input
					onChange={this.handleChange}
					type="text"
					name="name"
					value={name}
					placeholder="Your name"
					id={nameInputId}
				/>
				<label>Phone</label>
				<input
					type="tel"
					name="number"
					pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
					placeholder="000-00-00"
					id={phoneInputId}
					value={number}
					onChange={this.handleChange}
				/>
				<button type="submit">Add contact</button>
			</form>
		);
	}
}
