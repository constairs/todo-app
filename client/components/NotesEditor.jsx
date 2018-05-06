import React from 'react';

import ColorPicker from './ColorPicker.jsx';

class NotesEditor extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			text: '',
			color: '#ffffff'
		}
		this.handleTextChange = this.handleTextChange.bind(this);
		this.heandleTitleChange = this.heandleTitleChange.bind(this);
		this.handleNoteAdd = this.handleNoteAdd.bind(this);
		this.handleColorChange = this.handleColorChange.bind(this);
	}

	handleTextChange(e) {
		this.setState({ text: e.target.value });
	}

	heandleTitleChange(e) {
		this.setState({ title: e.target.value });
	}

	handleColorChange(color) {
		this.setState({ color });
	}

	handleNoteAdd(e) {
		const newNote = {
			title: this.state.title,
			text: this.state.text,
			color: this.state.color
		};

		this.props.onNoteAdd(newNote);
		this.setState({ text: '', title: '', color: '#ffffff' });
	}

	render() {
		return (
			<div className="NoteEditor">
				<input type="text" className="NoteEditor__title" placeholder="Enter title" value={this.state.title} onChange={this.heandleTitleChange} />
				<textarea placeholder="Enter note text" rows={5} className="NoteEditor__text" value={this.state.text} onChange={this.handleTextChange}></textarea>
				<div className="NoteEditor__footer">
					<ColorPicker 
						value={this.state.color}
						onChange={this.handleColorChange}
					/>
					<button className="NoteEditor__button" disabled={!this.state.text} onClick={this.handleNoteAdd}>
						Add
					</button>
				</div>
			</div>
		)
	}
}

export default NotesEditor;