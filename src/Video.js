import React, { Component } from 'react';
import YouTube from 'react-youtube';

class Video extends Component {
    render() {
        const opts = {
            height: '480',
            width: '854',
            playerVars: {
                autoplay: 0
            }
        };
        return (
            <YouTube
                videoId="IOfVT1-cUIE"
                opts={opts}
                onReady={this._onReady}
            />
        );
    };
    _onReady(event) {
        event.target.pauseVideo();
    }
};

export default Video;