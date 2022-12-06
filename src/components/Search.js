import React from 'react';

export default function Search ({ handleSearchNote }) {
	return (
		<div className='search'>
			<input
				onChange={(event) => handleSearchNote(event.target.value)}
				type='text'
				placeholder='🔍Type to search...'
			/>
		</div>
	);
};

