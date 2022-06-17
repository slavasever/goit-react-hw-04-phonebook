import React from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ filter, onChange, onClick }) => {
  return (
    <div className={s.wrapper}>
      <label htmlFor="filter" className={s.label}>
        Find contacts by name
      </label>
      <input
        type="text"
        name="filter"
        value={filter}
        className={s.input}
        onChange={onChange}
      />
      <button type="button" className={s.button} onClick={onClick}>
        Clear
      </button>
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Filter;
