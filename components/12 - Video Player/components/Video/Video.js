const Video = ({ videoSrc }) => {
  return (
    <div>
      <video
        src={videoSrc}
        style={{ width: "100%" }}
        loop
        controls
        autostart="true"
        autoPlay
        muted
      />
    </div>
  );
};

export default Video;
