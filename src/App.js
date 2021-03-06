import React from 'react';
import {Grid} from '@material-ui/core';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';
import youtube from './api/youtube';

class App extends React.Component{
    state = {
        videos:[],
        selectedVideo:null,
    }

    componentDidMount() {
        this.handleSubmit('Puneeth Rajkumar')
    }

    onVideoSelect = (video) => {
        this.setState({selectedVideo:video});

    }

    
    handleSubmit =async (searchTerm)=> {
        const response = await youtube.get('search', {
            params: {
                part:'snippet',
                maxResults: 2,
                key: 'AIzaSyBkZIWygouyBg0tdA0VRjrXTu6bkkBFciE',
                q: searchTerm,
            }
         

        });
        this.setState({videos:response.data.items, selectedVideo:response.data.items[1]});
       

    }

    render() {
        const {selectedVideo,videos}=this.state;
        return(
            <Grid justify="center" container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit={this.handleSubmit}/>
                        </Grid>
                        <Grid item xs={8}>
                           <VideoDetail video={selectedVideo} />
                        </Grid>
                        <Grid item xs={4}>
                            {<VideoList video={videos} onVideoSelect={this.onVideoSelect} />} 
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
           
        );
    }
}



export default App;