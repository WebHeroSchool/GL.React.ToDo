import React from 'react';
import FilterItem from "../FilterItem/FilterItem"
import styles from "./FilterGroup.module.css"

export default function FilterGroup({ filterItems }) {
    return (<div className={styles.filterGroup} > {
        filterItems.map(item => (
            <FilterItem key={item.id}
                filterName={item.name}
                filterValue={item.value}
            />
        ))
    } </div>
    )
}