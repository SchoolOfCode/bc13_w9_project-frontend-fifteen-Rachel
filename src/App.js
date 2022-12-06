import { useState, useEffect } from 'react';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';

const convertToNote = (dto) => {
	return { id: dto.id, text: dto.content, date: new Date(dto.time).toLocaleDateString('en-GB') };
};

//test

// Get a list of notes.
export default function App  () {
	const [notes, setNotes] = useState([]);

	const [searchText, setSearchText] = useState('');

	const [darkMode, setDarkMode] = useState(false);



	useEffect(() => {
        async function getNotes () {
            const response = await fetch ('http://localhost:3001/api/notes', {
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
            })
            const data = await response.json()
            const note = data.payload
			setNotes(note.map(dto => convertToNote(dto)));
		} getNotes()
	}, []);

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
