import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

export class Provider extends Component {

    state = {
        track_list: [],
        heading: 'Top 10 Tracks'
    }

    componentDidMount() {
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&country=us&f_has_lyrics=1&apikey=2b0c7d8e3a6f4b9c8d5f3c4e5a6b7c8d`)
            .then(res => {
                this.setState({ track_list: res.data.message.body.track_list });
            })
            .catch(err => console.log(err));
    }

  render() {
    return (
     <Context.Provider value={this.state}>
        {this.props.children}
     </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;


 