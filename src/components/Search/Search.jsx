function Search({ setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search Smack Talk"
      onChange={(event) => {
        setSearch(event.target.value);
      }}
    />
  );
}

export default Search;
