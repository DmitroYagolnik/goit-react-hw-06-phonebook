import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HeaderComponent from '../../containers/HeaderComponent/HeaderComponent';
import ContactForm from '../../containers/ContactForm/ContactForm';
import ScoleTransition from '../../transition/ScoleTransition/ScoleTransition';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import './App.module.css';

const App = ({ contacts }) => {
  const isShowFilter = contacts.length > 2;
  return (
    <>
      <HeaderComponent logoTitle="Phonebook" />
      <main>
        <ContactForm />
        <ScoleTransition isShow={isShowFilter}>
          <Filter />
        </ScoleTransition>

        <ContactList />
      </main>
    </>
  );
};

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

/*
  Звертаємося до redux, щоб отримати інформацію по збереженим контактам.
  Дана інформація буде використана для того, щоб дізнатися, 
  чи потрібно буде рендерити компонент <Filter /> 
*/
const mapStateToProps = state => ({
  contacts: state.contacts,
});

export default connect(mapStateToProps)(App);
