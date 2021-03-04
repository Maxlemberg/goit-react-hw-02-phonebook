import React from 'react';
import styles from './Filter.module.css';

const Filter = ({ filter, handleInput }) => {
  return (
    <label className={styles.cont} htmlFor="">
      <h3 className={styles.title}>Find contacts by name</h3>
      <input
        type="text"
        value={filter}
        className={styles.input}
        name="filter"
        onInput={handleInput}
      />
    </label>
  );
};

export default Filter;
