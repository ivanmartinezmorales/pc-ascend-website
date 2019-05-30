R7mM0NYZv60
import React, { Component } from 'react';
import Youtube from 'react-youtube';

export default class PresentationVideo extends Component {
    render() {
        const opts = {
            height: '480',
            width: '854',
            playerVars: {
                autoplay: 0
            }
        };
        return (
            <div>
                <YouTube
                videoId="R7mM0NYZv60"
                opts={opts}
                onReady={this._onReady}
            />
            </div>
        );
    };
    _onReady(event) {
        event.target.pauseVideo();
    }
};
