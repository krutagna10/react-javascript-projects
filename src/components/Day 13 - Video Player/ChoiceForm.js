const ChoiceForm = ({ videoNames, onChoiceChange, choice }) => {
  const handleChoiceChange = (event) => {
    onChoiceChange(event.target.value);
  };

  return (
    <div style={{ marginBottom: "2rem" }}>
      {videoNames.map((videoName, index) => (
        <label key={index}>
          {videoName}
          <input
            type="radio"
            value={videoName}
            checked={choice === videoName}
            onChange={handleChoiceChange}
            name="video-choice"
            style={{ marginRight: "1rem" }}
          />
        </label>
      ))}
    </div>
  );
};

export default ChoiceForm;
