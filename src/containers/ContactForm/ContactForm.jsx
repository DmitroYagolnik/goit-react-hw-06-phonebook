import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addContact } from '../../redux/actions';
import style from './ContactForm.module.scss';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  static propTypes = {
    addContact: PropTypes.func.isRequired,
  };

  state = {
    ...INITIAL_STATE,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmitForm = event => {
    event.preventDefault();
    // eslint-disable-next-line no-shadow
    const { addContact } = this.props;
    const { name, number } = this.state;

    const newContact = { name, number, id: uuidv4() };
    addContact(newContact);
    this.setState({
      ...INITIAL_STATE,
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={style.FormContainer} onSubmit={this.handleSubmitForm}>
        <label className={style.labelContainer}>
          Name
          <input
            type="text"
            name="name"
            className={style.inputForm}
            value={name}
            onChange={this.handleChange}
            required
          />
        </label>
        <label className={style.labelContainer}>
          Number
          <input
            type="tel"
            name="number"
            className={style.inputForm}
            value={number}
            onChange={this.handleChange}
            pattern="^(\+?\d{1,3}\(?-?\s?\d{2,3}\)?-?\s?)?\d{3}-?\s?\d{2}-?\s?\d{2}$"
            required
          />
        </label>
        <button type="submit" className={style.submitButton}>
          Add contact
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts,
});

export default connect(mapStateToProps, { addContact })(ContactForm);
