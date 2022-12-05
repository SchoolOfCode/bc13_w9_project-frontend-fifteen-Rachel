import { useState, useEffect } from 'react';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';

const convertToNote = (dto) => {
	return { id: dto.id, text: dto.content, date: new Date(dto.time).toLocaleDateString('en-US') };
};


// Get a list of notes.
const App = () => {
	const [notes, setNotes] = useState([]);

	const [searchText, setSearchText] = useState('');

	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		fetch('http://localhost:3001/api/notes')
  			.then((response) => response.json())
  			.then((response) => {
				setNotes(response.payload.map(dto => convertToNote(dto)));
			});
	}, []);// Get a list of notes.

		// Add a note.
	const addNote = async (text) => {
		fetch('http://localhost:3001/api/notes', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ content: text }),
		})
		.then((response) => response.json())
		.then((response) => {
			setNotes([...notes, convertToNote(response.payload)]);
		});
	};

		// Delete a note.
	const deleteNote = (id) => {
		fetch(`http://localhost:3001/api/notes/${id}`, {
			method: 'DELETE',
		})
		.then((response) => response.json())
		.then((response) => {
			const newNotes = notes.filter(note => note.id !== id);
			setNotes(newNotes);
		});
	};

		// Returns a div for the container.
	return (
		<div className={`${darkMode && 'dark-mode'}`}>
			<div className='container'>
				<Header handleToggleDarkMode={setDarkMode} />
				<Search handleSearchNote={setSearchText} />
				<NotesList
					notes={notes.filter((note) =>
						note.text.toLowerCase().includes(searchText)
					)}
					handleAddNote={addNote}
					handleDeleteNote={deleteNote}
				/>
			</div>
		</div>
	);
};

export default App;
