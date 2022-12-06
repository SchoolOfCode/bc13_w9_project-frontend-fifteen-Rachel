export default function Card ({ id, text, date, handleDeleteNote, handleEditNote}) {
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

