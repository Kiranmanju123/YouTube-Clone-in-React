import React from 'react';
import {Grid,Paper,Typography} from '@material-ui/core';
//import { width } from '@material-ui/system';

const VideoItem = ({video,onVideoSelect}) => {
    return(
       <Grid item xs={12}>
           <Paper style={{cursor:'pointer'}} onClick={()=>onVideoSelect(video)}>
               <img style={{marginRight:'20px'}} alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
               <Typography variant="subtitle1"><b>{video.snippet.title}</b></Typography>

           </Paper>

       </Grid>
    );

}

export default VideoItem;