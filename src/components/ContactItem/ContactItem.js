import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactItem.module.css';

const ContactItem = ({ id, name, number, onClick }) => {
  return (
    <li className={s.item}>
      <p className={s.text}>
        - {name}: {number}
      </p>
      <button
        type="button"
        className={s.button}
        onClick={() => {
          onClick(id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ContactItem;
