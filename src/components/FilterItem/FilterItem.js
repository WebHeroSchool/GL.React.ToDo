import React from 'react';
import styles from "./FilterItem.module.css";
import PropTypes from 'prop-types';

export default function FilterItem({ filterName, filterValue }) {
    return (
        <button value={filterValue} className={styles.filterItem}>
            {filterName}
        </button>
    );
};

FilterItem.propTypes = {
    filterName: PropTypes.string.isRequired,
    filterValue: PropTypes.string.isRequired,
};