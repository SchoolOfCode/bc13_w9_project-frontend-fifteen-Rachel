import React from 'react';

// Creates a snippet for the click button.
const Header = ({ handleToggleDarkMode }) => {
	return (
		<div className='header'>
			<h1>Code Snippets</h1>
			<button className='save'
				onClick={() =>handleToggleDarkMode((previousDarkMode) => !previousDarkMode)}>
				Toggle Mode
			</button>
		</div>
	);
};

export default Header;