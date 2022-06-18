import { useState } from 'react';
import { customAlphabet } from 'nanoid';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

const nanoid = customAlphabet('1234567890abcdef', 5);

function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const inputHandler = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const submitHandler = event => {
    event.preventDefault();

    const id = nanoid();

    onSubmit({ id, name, number });
    formReset();
  };

  const formReset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={submitHandler} className={s.form}>
      <label htmlFor="name" className={s.label}>
        Name
      </label>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        className={s.input}
        value={name}
        onChange={inputHandler}
      />

      <label htmlFor="number" className={s.label}>
        Number
      </label>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        className={s.input}
        value={number}
        onChange={inputHandler}
      />

      <button type="submit" className={s.button}>
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
