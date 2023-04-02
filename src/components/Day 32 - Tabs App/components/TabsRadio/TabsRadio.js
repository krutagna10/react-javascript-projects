function TabsRadio({ jobs, index, onIndexChange }) {
  return (
    <form className="form">
      <span>Select Company :</span>
      {jobs.map((job, i) => (
        <label key={job.id}>
          {job.company}{" "}
          <input
            type="radio"
            name="radio-input"
            onChange={onIndexChange}
            value={i}
            style={{ marginRight: "1rem" }}
            checked={index === i}
          />
        </label>
      ))}
    </form>
  );
}

export default TabsRadio;
