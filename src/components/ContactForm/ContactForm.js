import React, { Component } from 'react';
import { customAlphabet } from 'nanoid';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

const nanoid = customAlphabet('1234567890abcdef', 5);

class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  inputHandler = event => {
    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  submitHandler = event => {
    event.preventDefault();

    const { name, number } = this.state;
    const id = nanoid();
    const { onSubmit } = this.props;

    onSubmit({ id, name, number });
    this.formReset();
  };

  formReset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.submitHandler} className={s.form}>
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
          onChange={this.inputHandler}
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
          onChange={this.inputHandler}
        />

        <button type="submit" className={s.button}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
