import React from 'react';

class NotesItem extends React.Component {
	render() {

		const style = { backgroundColor: this.props.color };

		return (
			<div className="NoteItem" style={style}>
			 <div className="NoteDeleteBtn" onClick={this.props.onDelete}>x</div>
				{this.props.title
				?
					<h1 className="NoteTitle">{this.props.title}</h1>
				: 
					null
				}
				<p className="NoteText">{this.props.children}</p>
			</div>
		);
	}
}

export default NotesItem;