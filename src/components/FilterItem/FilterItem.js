import React from 'react';
import styles from "./FilterItem.module.css";

export default function FilterItem({ filterName, filterValue }) {
    return (
        <button value={filterValue} className={styles.filterItem}>
            {filterName}
        </button>
    )
}