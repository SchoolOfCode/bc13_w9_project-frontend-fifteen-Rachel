import React from 'react';

// Creates a snippet for the click button.
export default function Header ({ handleToggleDarkMode }) {
	return (
		<div className='header'>
			<h1>Code Snippets</h1>
			<button
				onClick={() =>
					handleToggleDarkMode(
						(previousDarkMode) => !previousDarkMode
					)
				}
				className='save'
			>
				Toggle Mode
			</button>
		</div>
	);
};
