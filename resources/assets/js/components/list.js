import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Nav from './navbar';
import Video from './Video';

class List extends Component {

	constructor() {

		super();
		//Initialize the state in the constructor
		this.state = {
			videos : [],
			currentVideo : null
		}
	}
	/*componentDidMount() is a lifecycle method
	 * that gets called after the component is rendered
	 */
	componentDidMount() {
		/* fetch API in action */
		fetch('/api/videos')
			.then(response => {
				return response.json();
			})
			.then(videos => {
				//Fetched product is stored in the state
				this.setState({
					videos
				});
			});
	}

	renderVideos() {
		return this.state.videos.map(video => {
			return (
				/* When using list you need to specify a key
				 * attribute that is unique for each list item
				*/
				<li onClick={() => this.handleClick(video)} key={video.id} >
		                    { video.title }
		            </li>
				);
		})
	}

	handleClick(video) {

		this.setState({
			currentVideo : video
		});

	}


	render() {
		return (
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <h3 className="video-list-header"> List of Videos </h3>
                                <ul className="render-videos">
                                { this.renderVideos() }
                                </ul>
                            </div >
                            <div  className="row .col-sm-6">
                            <Video video={this.state.currentVideo} />
                            </div>
                        </div>



                    </div>
			);
	}
}

export default List;

/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";
*/

if (document.getElementById('root')) {
	ReactDOM.render(<List />, document.getElementById('root'));
}
