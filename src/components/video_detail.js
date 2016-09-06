import React from 'react';

const VideoDetail = ({video}) => {

  // Since most thing in react are async, video will give an error since the
  // initial state of the parent video is null to being with {videos:[]}
  if(!video){
    return (<div>loading...</div>);
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
