import Video from "./components/Video/Video";
import ChoiceForm from "./components/ChoiceForm/ChoiceForm";
import { useState } from "react";

const videos = {
  deer: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4",
  snail:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4",
  cat: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4",
  spider:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4",
};

const videoNames = Object.keys(videos);

const VideoPlayer = () => {
  const [choice, setChoice] = useState(videoNames[0]);

  const handleChoiceChange = (nextChoice) => {
    setChoice(nextChoice);
  };

  return (
    <div style={{ maxWidth: "36rem", textAlign: "center" }}>
      <h1>Video Player</h1>
      <ChoiceForm
        videoNames={videoNames}
        onChoiceChange={handleChoiceChange}
        choice={choice}
      />
      <Video videoSrc={videos[choice]}></Video>
    </div>
  );
};

export default VideoPlayer;
