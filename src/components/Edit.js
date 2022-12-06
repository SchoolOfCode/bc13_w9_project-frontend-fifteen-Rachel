import React from 'react';
import { useState } from 'react';

export default function Edit ({ handleEditNote }) {
    const [noteText, setNoteText] = useState(' ');

    const handleNoteChange = () => {
		// give handleeditnote text and an id


    }

	return (
		<div className='edit'>
        	<input
				onChange={(event) => event.target.value}
				type='id for card to change'
				placeholder='id'
			/>
			<input
				onChange={(event) => event.target.value}
				type='text'
				placeholder='new content'
			/>
            <button className="edit" onClick={handleNoteChange}>EDIT</button>
		</div>
	);
};