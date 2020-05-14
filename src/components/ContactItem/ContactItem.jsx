import React from 'react';
import PropTypes from 'prop-types';
import style from './ContactItem.module.scss';

const ContactItem = ({ elem, handleDelete }) => {
  const { id, name, number } = elem;
  const deleteElem = () => handleDelete(id);
  return (
    <li className={style.contactItem} id={id}>
      <span>{name}</span>
      <span>{number}</span>

      <button type="button" className={style.deleteButton} onClick={deleteElem}>
        &#10005;
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  elem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ContactItem;
