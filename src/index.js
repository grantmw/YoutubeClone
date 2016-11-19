// Component to put on DOM
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar'; //path needed because it is not a library that is provided by npm
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyDv_OhlIj_Z6RHKayr59lHf6hbEMsWx1Zc';



class App extends Component {
	constructor(props) {
		super(props);

		this.state = { videos: [] };

		YTSearch({ key: API_KEY, term: 'surfboards'}, (videos) => {
			this.setState({ videos });
			//this.setState({ videos: videos })
		});
	}

	render() {
		return (
			<div>
				<SearchBar />
				<VideoList videos={this.state.videos} />
			</div>
		);
	}
}


ReactDOM.render(<App />, document.querySelector('.container'));