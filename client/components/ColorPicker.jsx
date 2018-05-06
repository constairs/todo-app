import React from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames';

const COLORS = ['#FFFFFF', '#80F8FF', '#B5D7BE', '#FF8A80', '#CCFF90', '#CFD8DC', '#FFD180'];

class ColorPicker extends React.Component {
	render() {
		return (
			<div className='ColorPicker'>
				{
					COLORS.map(color => <div 
						key={color}
						className={cx('ColorPicker__swatch', { selected: this.props.value === color })}
						style={{ backgroundColor: color }} 
						onClick={this.props.onChange.bind(null, color)}
						/>
					)
				}
			</div>
		);
	}
}

export default ColorPicker;