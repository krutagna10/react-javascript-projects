const Video = ({ videoSrc }) => {
  return (
    <div>
      <video
        style={{ width: "100%" }}
        loop
        controls
        autostart="true"
        autoPlay
        muted
        src={videoSrc}
      />
    </div>
  );
};

export default Video;
