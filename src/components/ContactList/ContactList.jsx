/* eslint-disable radix */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { deleteContact } from '../../redux/actions';
import ContactItem from '../ContactItem/ContactItem';
import transition from '../../transition/SladeLeftTransition/SladeLeftTransition.module.scss';

const SearchElems = (arrayElems, searchValue) => {
  return arrayElems.filter(elem =>
    elem.name.toUpperCase().includes(searchValue.toUpperCase()),
  );
};

// eslint-disable-next-line no-shadow
const ContactList = ({ contacts, filter, deleteContact }) => {
  const delay = parseInt(transition.delay);
  const contacttList =
    filter.length > 0 ? SearchElems(contacts, filter) : contacts;

  return (
    <TransitionGroup component="ul">
      {contacttList.map(elem => (
        <CSSTransition
          key={elem.id}
          timeout={delay}
          classNames={transition}
          unmountOnExit
        >
          <ContactItem elem={elem} handleDelete={deleteContact} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

ContactList.defaultProps = {
  contacts: [],
  filter: '',
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ),
  filter: PropTypes.string,
  deleteContact: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  contacts: state.contacts,
  filter: state.filter,
});

export default connect(mapStateToProps, { deleteContact })(ContactList);
