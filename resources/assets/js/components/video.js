
import React, { Component } from 'react';
import { Player } from 'video-react';

/* Stateless component or pure component
 * { product } syntax is the object destructing
 */
const Video = ({ video }) => {

    //if the props product is null, return Product doesn't exist
    if (!video) {
        return (<div> </div>);
    }

    //Else, display the product data
    return (
        <div>
            <table >
                <tbody>
                    <tr>
                        <td colSpan="1" className='label-col'>title</td>
                        <td colSpan="3">{video.title}</td>
                    </tr>
                    <tr>
                        <td className='label-col' >file size</td>
                        <td className='data-column'>{video.file_size}</td>                        
                        <td className='label-col'>video format</td>
                        <td className='data-column'>{video.video_format}</td>
                    </tr>
                    <tr>
                        <td className='label-col' >duration</td>
                        <td className='data-column'>{video.duration}</td>
                        <td className='label-col'>bit rate</td>
                        <td className='data-column'>{video.bit_rate}</td>
                    </tr>
                    <tr>
                        <td  colSpan="1" className='label-col'>keywords</td>
                        <td  colSpan="3" >{video.keywords}</td>
                    </tr>
                    <tr>
                        <td  colSpan="1" className='label-col'>locations</td>
                        <td  colSpan="3">{video.location}</td>
                    </tr>
                    <tr>
                        <td  colSpan="1" className='label-col'>Video</td>
                        <td  colSpan="3" className='video-player-cell'><Player
                                            playsInline
                                            poster="/storage/poster.png"
                                            src={video.filename}/></td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}
export default Video;
