import React, { Component } from 'react';

class SearchBar extends Component { // React.component
	constructor(props) {
		super(props);

		this.state = { term: '' };
	}

	render() {
		return ( 
			<div className="search-bar">
				<input
				value={this.state.term}
				onChange={event => this.onInputChange(event.target.value)} />
			</div>
		);
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}


}

export default SearchBar; //anything that imports search_bar, file will have comp. SearchBar; declare what to export