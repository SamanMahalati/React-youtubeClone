import React from 'react';

import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


//React Router Dom
import { Link } from 'react-router-dom';
import { Grid, Skeleton } from '@mui/material';

const NewVideo = ({ data }) => {

    return (
        <Grid sx={{ backgroundColor: "#1f1e25", borderRadius: "1rem", overflow: "hidden" }}>
            <Link to={`/video/${data.id.videoId}`} style={{ color: "#fff", textDecoration: "none" }}>
                {
                    data?.snippet?.thumbnails?.medium?.url.split("/")[5] === `mqdefault.jpg` ?
                        <Skeleton sx={{ bgcolor: '#45444b' }} animation="wave" variant="rectangular" width={"100%"} height={200} />
                        :
                        <CardMedia
                            component="img"
                            sx={{ height: 180, width: 358 }}
                            image={data?.snippet?.thumbnails?.medium?.url} />
                }
            </Link>


            <CardContent>
                <Typography variant="body1" sx={{ width: "18rem", overflow: "visible", height: "4rem", color: "#cac9cb" }}>
                    {
                        data?.snippet?.title
                    }
                </Typography>
                <Typography variant="body2" sx={{ padding: "2rem 0 0 0", color: "#605e6a" }}>
                    {data?.snippet?.channelTitle}
                </Typography>
            </CardContent>
        </Grid>
    );
};

export default NewVideo;