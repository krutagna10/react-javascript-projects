const Search = () => {
  return (
    <form style={{ display: "flex", gap: "1rem" }}>
      <input
        type="text"
        placeholder="Enter the username"
        style={{ width: "100%" }}
      />
      <button>Search</button>
    </form>
  );
};

export default Search;
