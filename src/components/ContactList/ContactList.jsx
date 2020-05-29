import React from "react";
import { ContactListElement } from "../ContactListElement/ContactListElement";
import PropTypes from "prop-types";

export const ContactList = ({ contacts, onContactDelete }) => {
	return contacts.map(({ id, name, number }) => {
		return (
			<ContactListElement
				name={name}
				key={id}
				number={number}
				onDelete={() => onContactDelete(id)}
			/>
		);
	});
};

ContactList.defaultProps = {
	contacts: [],
};

ContactList.propTypes = {
	contacts: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			number: PropTypes.string.isRequired,
		}),
	).isRequired,
	onContactDelete: PropTypes.func.isRequired,
};
