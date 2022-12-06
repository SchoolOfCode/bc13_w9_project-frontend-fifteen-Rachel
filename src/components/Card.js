export default function Card ({ id, text, date, handleDeleteNote }) {
		return (
		<div className='note'>
			<span>{text}</span>
			<div className='note-footer'>
				<small>{date}</small>
				<small>{id}</small>
				<button
					onClick={() => handleDeleteNote(id)}
					className='delete-icon'
					size='1.3em'
				>DELETE</button>	
			</div>
		</div>
	);
};

