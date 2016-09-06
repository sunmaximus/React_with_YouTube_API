import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  // props.videos is an [{},{}...]
  // onVideoSelect is a function from the root parent component
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video} />
    );
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
