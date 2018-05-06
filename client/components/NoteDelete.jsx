import React from 'react';

class NoteDelete extends React.Component {

	// constructor(props) {
	// 	super(props);
	// }

	handleNoteDelete(note) {
		NotesActions.deleteNote(note.id);
	}

	render() {
		return (
			<div className="NoteDeleteBtn" onDelete={this.props.onNoteDelete.bind(null, note)}>x</div>
		);
	}
}

export default NoteDelete;