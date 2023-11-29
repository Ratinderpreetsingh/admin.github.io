import React from 'react';

const SearchBar = () => {
  return (
    <div style={styles.container}>
      <input
        type="text"
        style={styles.input}
        placeholder="Search..."
      />
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#f2f2f2',
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
    outline: 'none',
  },
};

export default SearchBar;
