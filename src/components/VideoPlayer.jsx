import React, { useContext } from "react";
import { SocketContext } from "../SocketContext";
import "../style.css";

import { Grid, Typography, Paper } from "@mui/material/";
// import { makeStyles, createStyles } from "@mui/material/styles";

// const useStyles = makeStyles((theme) => ({
//   video: {
//     width: "550px",
//     [theme.breakpoints.down("xs")]: {
//       width: "300px",
//     },
//   },
//   gridContainer: {
//     justifyContent: "center",
//     [theme.breakpoints.down("xs")]: {
//       flexDirection: "column",
//     },
//   },
//   paper: {
//     padding: "10px",
//     border: "2px solid black",
//     margin: "10px",
//   },
// }));

const VideoPlayer = () => {
  const { call, name, callAccepted, myVideo, userVideo, callEnded, stream } =
    useContext(SocketContext);
  // const classes = useStyles();
  return (
    <Grid container className='gridContainer'>
      {/* own Video */}
      {
        stream && (
          <Paper className='paper'>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            {name || 'Name'}
          </Typography>
          <video
            playsInline
            muted
            ref={myVideo}
            autoPlay
            className='video-box'
          />
        </Grid>
      </Paper>
        )
      }
      {/* users Video */}
      {
        callAccepted && !callEnded && (
          <Paper className='paper'>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
          {call.name || 'Name'}
          </Typography>
          <video
            playsInline
            ref={userVideo}
            autoPlay
            className='video-box'
          />
        </Grid>
      </Paper>
        )
      }
    </Grid>
    //   <div className="video-container">
    //     {stream && (
    //       <div>
    //         <h3>{name || "name"}</h3>
    //         <video playsInline muted ref={myVideo} autoPlay />
    //       </div>
    //     )}
    //     {callAccepted && !callEnded && (
    //       <div>
    //         <h3>{call.name || "name"}</h3>
    //         <video playsInline ref={userVideo} autoPlay />
    //       </div>
    //     )}
    //   </div>
  );
};

export default VideoPlayer;
