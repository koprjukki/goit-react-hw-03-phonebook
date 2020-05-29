import React from "react";
import PropTypes from "prop-types";

export const ContactListElement = ({ name, number, onDelete }) => {
	return (
		<>
			<p>
				{name} : {number}
			</p>
			<button onClick={onDelete}>Delete</button>
		</>
	);
};

ContactListElement.propTypes = {
	name: PropTypes.string.isRequired,
	number: PropTypes.string.isRequired,
	onDelete: PropTypes.func.isRequired,
};
