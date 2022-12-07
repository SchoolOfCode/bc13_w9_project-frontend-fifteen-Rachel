

export default function Edit ({ handleEditNote }) {
	const id = 33
	const text = "what about now?"
	const handleClick = () => {
		handleEditNote(text, id)
		}

	return(
		<div className='edit'>
            <button className="edit" onClick={handleClick}>EDIT</button>
		</div>
	)
}
//     const [text, setText] = useState('');
// 	const [id, setID] = useState = ('');

// 	const handleIdChange = (event) => {
// 		setID(event.target.value);
// 	}

// 	const handleTextChange = (event) => {
// 		setText(event.target.value);
// 	}


//     const handleClick = () => {
// 		handleEditNote(id, text)
// 		setText('')
// 		setID('')
// 	    }

// 	return (
// 		<div className='edit'>
//         	<input
// 				onChange={handleIdChange}
// 				type='id for card to change'
// 				placeholder='id'
// 			/>
// 			<input
// 				onChange={handleTextChange}
// 				type='text'
// 				placeholder='new content'
// 			/>
//             <button className="edit" onClick={handleClick}>EDIT</button>
// 		</div>
// 	);
// };