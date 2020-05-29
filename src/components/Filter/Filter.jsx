import React from "react";
import PropTypes from "prop-types";

export const Filter = ({ filteredValue, handleChangeFilter }) => {
	return (
		<label>
			Find contacts by name
			<input
				name="filter"
				type="text"
				placeholder="Right here!"
				value={filteredValue}
				onChange={(e) => handleChangeFilter(e.target.value)}
			/>
		</label>
	);
};

Filter.propTypes = {
	filteredValue: PropTypes.string.isRequired,
	handleChangeFilter: PropTypes.func.isRequired,
};
