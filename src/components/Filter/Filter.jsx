import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateFilter } from '../../redux/actions';
import style from './Filter.module.scss';

// eslint-disable-next-line no-shadow
const Filter = ({ updateFilter }) => {
  const search = e => updateFilter(e.target.value);
  return (
    <div className={style.filterContainer}>
      <label className={style.filterLabel}>
        Find contact by name
        <input type="search" className={style.filterInput} onChange={search} />
      </label>
    </div>
  );
};

Filter.propTypes = {
  updateFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  contacts: state.contacts,
  filter: state.filter,
});

export default connect(mapStateToProps, { updateFilter })(Filter);
