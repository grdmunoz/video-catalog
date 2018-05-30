
import React, { Component } from 'react';
import { Player } from 'video-react';
import axios from "axios";



class EditVideo extends Component {

    constructor(props) {
        super(props);
     
        this.state = {
            editVideo: {
                title: "",
                duration:"" 
            }
        };   
      };

      doDelete(video) {
          axios.delete('api/videos/' + video.id)
          .then(res => {
            console.log(res);
          })
      }

    handleInput(key, e) {
        /*Duplicating and updating the state */
        var state = Object.assign({}, this.state.editVideo);
        state[key] = e.target.value;
        this.setState({ editVideo: state });

    }

    onFormSubmit(e) {
        e.preventDefault(); // Stop form submit 
        console.log('form submitted',this.state)
    }

    componentDidMount() {
        const { video} = this.props;
        this.setState({ editVideo: video });
      }
    
   render() {

    const { video } = this.props;
       
    if (!video) {
        return (<div> </div>);
    };

   // this.state.editVideo.title =  new string(video.title)
    return (
        <div>
            <form className="md-form" onSubmit={this.onFormSubmit}>
	           <table>

                <tbody>
                    <tr>
                        <td colSpan="1" className='label-col'>title</td>
                        <td colSpan="3">
                            <input
                                type="text"
                                onChange={e => this.handleInput("title", e)}
                                className="form-control"
                                value={video.title}
                                id="title"/>
                        </td>
                    </tr>
                    <tr>
                        <td className='label-col' >file size</td>
                        <td className='data-column'>{video.file_size}</td>                        
                        <td className='label-col'>video format</td>
                        <td className='data-column'>{video.video_format}</td>
                    </tr>
                    <tr>
                        <td className='label-col' >duration</td>
                        <td className='data-column'>
                            <input
                                type="text"
                                onChange={e => this.handleInput("duration", e)}
                                className="form-control"
                                value={video.duration || ""}  
                                id="title"/>
                        </td>
                        <td className='label-col'>bit rate</td>
                        <td className='data-column'>
                            <input
                                type="text"
                                onChange={e => this.handleInput("bit_rate", e)}
                                className="form-control"
                                value={video.bit_rate || ""}
                                id="title"/>
                        </td>
                    </tr>
                    <tr>
                        <td  colSpan="1" className='label-col'>keywords</td>
                        <td  colSpan="3" >
                            <input
                                type="text"
                                onChange={e => this.handleInput("keywords", e)}
                                className="form-control"
                                value={video.keywords || ""}
                                id="title"/>                        
                        </td>
                    </tr>
                    <tr>
                        <td  colSpan="1" className='label-col'>locations</td>
                        <td  colSpan="3">
                            <input
                                type="text"
                                onChange={e => this.handleInput("location", e)}
                                className="form-control"
                                value={video.location || ""}
                                id="title"/>                          
                        </td>
                    </tr>
                    <tr>
                        <td  colSpan="1" className='label-col'>Video</td>
                        <td  colSpan="3" className='video-player-cell'><Player
                                            playsInline
                                            poster="/storage/poster.png"
                                            src={video.filename}/></td>
                    </tr>
                    <tr>
                        <td ></td>
                        <td ><button type="button" className="btn btn-primary" onClick={() => this.doDelete(video)} >delete</button></td>
                        <td > <button type="submit" className="btn btn-primary"  >save</button></td>
                        <td ></td>
                    </tr>
                </tbody>
       
            </table>
                 </form>                 
        </div>
    )}
}


export default EditVideo;
