import React from 'react';

import NoteItem from './NoteItem.jsx';
import Masonry from 'react-masonry-component';


class NotesGrid extends React.Component {

	render() {
		const masonryOptions = {
			itemSelector: '.NoteItem',
			columnWidth: 250,
			gutter: 30,
			isFitWidth: true
		};
		return (
			<Masonry className="NotesGrid" options={masonryOptions}>
				{this.props.notes.map(note => 
					<NoteItem key={note.id} title={note.title} onDelete={this.props.onNoteDelete.bind(null, note)} color={note.color} >
					{note.text}
					</NoteItem>
				)}
			</Masonry>
		)
	}
}

export default NotesGrid;