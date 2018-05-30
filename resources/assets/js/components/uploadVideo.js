/**
 *
 */
import React, { Component } from "react";

import axios, { post } from "axios";

class UploadVideo extends Component {
    constructor(props) {
        super(props);
        /* Initialize the state. */
        this.state = {
            newVideo: {
                title: ""
            },
            file: null
        };

        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onFileChange = this.onFileChange.bind(this);
        this.fileUpload = this.fileUpload.bind(this);

        //Boilerplate code for binding methods with `this`
        this.handleInput = this.handleInput.bind(this);
    }

    /* This method dynamically accepts inputs and stores it in the state */
    handleInput(key, e) {
        /*Duplicating and updating the state */
        var state = Object.assign({}, this.state.newVideo);
        state[key] = e.target.value;
        this.setState({ newVideo: state });
    }

    onFormSubmit(e) {
        e.preventDefault(); // Stop form submit
        document.getElementById("close-modal").click();
        this.fileUpload(this.state.file, this.state.newVideo.title).then(
            response => {
                console.log(response.data);
            }  
        )

    }
    onFileChange(e) {
        this.setState({ file: e.target.files[0] });
    }
    fileUpload(file, title) {
        const url = "/api/videos/";
        const formData = new FormData();
        formData.append("video", file);
        formData.append("title", title);

        const config = {
            headers: {
                "content-type": "multipart/form-data"
            }
        };

        return post(url, formData, config);

    }

    render() {
        return (
            <div>
                <form className="md-form" onSubmit={this.onFormSubmit}>
                    <div className="modal-body">
                        <div className="form-group">
                            <input
                                type="file"
                                onChange={this.onFileChange}
                                className="form-control"
                                id="video"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                onChange={e => this.handleInput("title", e)}
                                className="form-control"
                                id="title"
                            />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-dismiss="modal"
                            id="close-modal"
                        >
                            Close
                        </button>
                        <button type="submit" className="btn btn-primary" >
                            Save changes
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default UploadVideo;
