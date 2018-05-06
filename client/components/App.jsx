import React from 'react';
import ReactDOM from 'react-dom';

import NotesStore from '../stores/NotesStore';
import NotesActions from '../actions/NotesActions';

import NotesEditor from './NotesEditor.jsx';
import NotesGrid from './NotesGrid.jsx';

function getStateFromFlux() {
	return {
		isLoading: NotesStore.isLoading(),
		notes: NotesStore.getNotes()
	};
}

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = getStateFromFlux();
		this._onChange = this._onChange.bind(this);
	}

	componentWillMount() {
		NotesActions.loadNotes();
	}

	componentDidMount() {
		NotesStore.addChangeListener(this._onChange);
	}

	componentsDidMount() {
		NotesStore.removeChangeListener(this._onChange);
	}

	handleNoteAdd(noteData) {
		NotesActions.createNote(noteData);
	}

	handleNoteDelete(note) {
		NotesActions.deleteNote(note.id);
	}

	render() {
		return (
		<div className="App">
			<h1 className="App__header">Notes App</h1>
			<NotesEditor onNoteAdd={this.handleNoteAdd} />
			<NotesGrid notes={this.state.notes} onNoteDelete={this.handleNoteDelete} />
		</div>
		);
	}

	_onChange() {
		this.setState(getStateFromFlux());
	}

}

export default App;