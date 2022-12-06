import React from 'react';
import { MdSearch } from 'react-icons/md';

// Creates a search div.
export default function Search ({ handleSearchNote }) {
	return (
		<div className='search'>
			<MdSearch className='search-icons' size='1.3em' />
			<input
				onChange={(event) =>
					handleSearchNote(event.target.value)
				}
				type='text'
				placeholder='type to search...'
			/>
		</div>
	);
};

