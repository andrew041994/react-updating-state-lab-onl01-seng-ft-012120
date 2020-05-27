import React, { Component } from 'react';

export default class YoutubeDebugger extends Component {
    
    constructor() {
        
        super();
    

        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
           }
    }

    changeBitrate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    changeResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution: '720p',
                },
            },
        });
    }

    render() {
        return(
                <div>
                <p>{this.state.settings.bitrate}</p>
                <button onClick={this.changeBitrate} className="bitrate">Change Bitrate</button>
               
                 <p>{this.state.settings.video.resolution}</p>
                  <button onClick={this.changeResolution} className="resolution">Change Resolution</button>
             </div>

        )
    }
}

