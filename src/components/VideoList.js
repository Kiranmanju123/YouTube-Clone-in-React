import React from 'react'
import {Grid} from '@material-ui/core';
import VideoItem from './VideoItem';

const VideoList = ({video,onVideoSelect}) => {
    const listofVideo=video.map((video,id)=><VideoItem onVideoSelect={onVideoSelect} key={id} video={video}/>)
    return(
        <Grid container spacing={10}>
             {listofVideo}

        </Grid>
       
        ) 
}

export default VideoList;