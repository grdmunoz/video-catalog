import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Nav from './navbar';
import EditVideo from './EditVideo';
import UploadVideo from './UploadVideo';

/* An example React component */
class EditList extends Component {

	constructor() {

		super();
		//Initialize the state in the constructor
		this.state = {
			videos : [],
			currentVideo : null
		}
		this.handleAddVideo = this.handleAddVideo.bind(this);
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

	handleAddVideo(video) {

		/*Fetch API for post request */
		fetch('api/videos/', {
			method : 'post',
			/* headers are important*/
			headers : {
				'Accept' : 'application/json',
				'Content-Type' : 'application/json'
			},

			body : JSON.stringify(video)
		})

	}

	render() {


		return (
                    <div className="container">


                        <button type="button" className="btn btn-primary add-video-button" data-toggle="modal" data-target="#uploadVideoModal">
                            Upload Video
                        </button>

                        <div className="row">
                            <div className="col-sm-6">
                                <h3 className="video-list-header"> List of Videos </h3>
                                <ul className="render-videos">
                                { this.renderVideos() }
                                </ul>
                            </div >
                            <div  className="row .col-sm-6">
                            <EditVideo video={this.state.currentVideo} test={this.state.currentVideo} />
                            </div>
                        </div> 

                        <div className="modal fade in" id="uploadVideoModal" tabIndex="-1" role="dialog" aria-labelledby="uploadVideoModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="uploadVideoModalLabel">Upload Video</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                        <UploadVideo onAdd={this.handleAddVideo} />
                                </div>
                            </div>
                        </div>

                    </div>
			);
	}
}

export default EditList;

/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";
*/

if (document.getElementById('root')) {
	ReactDOM.render(<List />, document.getElementById('root'));
}