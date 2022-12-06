// Deletes a note forever.
export default function Note ({ id, text, date, handleDeleteNote }) {
	return (
		<div className='note'>
			<span>{text}</span>
			<div className='note-footer'>
				<small>{date}</small>
				<button
					onClick={() => handleDeleteNote(id)}
					className='delete-icon'
					size='1.3em'
				>DELETE</button>
			</div>
		</div>
	);
};

