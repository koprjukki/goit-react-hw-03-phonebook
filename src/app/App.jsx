import React, { Component } from "react";
import "./_app.sass";

import { ContactForm } from "../components/ContactForm/ContactForm";
import { ContactList } from "../components/ContactList/ContactList";
import { Filter } from "../components/Filter/Filter";

export default class App extends Component {
	state = {
		contacts: [
			{ id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
			{ id: "id-2", name: "Hermione Kline", number: "443-89-12" },
			{ id: "id-3", name: "Eden Clements", number: "645-17-79" },
			{ id: "id-4", name: "Annie Copeland", number: "227-91-26" },
		],
		filter: "",
	};

	componentDidMount() {
		const storage = localStorage.getItem("contacts");
		if (storage !== null) {
			this.setState({ contacts: JSON.parse(storage) });
		}
	}

	componentDidUpdate(prevState) {
		const { contacts } = this.state;
		if (prevState.contacts !== contacts) {
			localStorage.setItem("contacts", JSON.stringify(contacts));
		}
	}

	handleAddNewContact = (newContact) => {
		const contactAlreadyExist = this.state.contacts.find(
			(contact) => contact.name === newContact.name,
		);

		if (this.state.contacts.length > 0 && contactAlreadyExist) {
			alert(`${newContact.name} is already in contacts`);
		} else if (newContact.name.length > 0 && newContact.number.length > 8) {
			this.setState((prevState) => ({
				contacts: [...prevState.contacts, newContact],
			}));
		} else return alert("Enter valid value");
	};

	handleChangeFilter = (filter) => {
		this.setState({ filter });
	};

	handleFilterContacts = () => {
		return this.state.contacts.filter((contact) =>
			contact.name.toLowerCase().includes(this.state.filter.toLowerCase()),
		);
	};

	handleDeleteContact = (id) => {
		this.setState((state) => ({
			contacts: state.contacts.filter((contact) => contact.id !== id),
		}));
	};

	render() {
		const { filter } = this.state;

		return (
			<>
				<div className="container">
					<h1>Phonebook</h1>
					<ContactForm onSubmit={this.handleAddNewContact} />

					<h2>Contacts</h2>
					<Filter
						handleChangeFilter={this.handleChangeFilter}
						filteredValue={filter}
					/>
					<ContactList
						contacts={this.handleFilterContacts()}
						onContactDelete={this.handleDeleteContact}
					/>
				</div>
			</>
		);
	}
}
