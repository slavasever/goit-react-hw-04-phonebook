import React from 'react';
import PropTypes from 'prop-types';

import ContactItem from 'components/ContactItem';

const ContactList = ({ contacts, clickHandler }) => {
  return (
    <ul>
      {contacts.map(contact => {
        const { id, name, number } = contact;

        return (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            onClick={clickHandler}
          />
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default ContactList;
