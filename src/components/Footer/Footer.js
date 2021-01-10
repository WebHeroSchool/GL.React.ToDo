import React from 'react'

const Footer = () => (
    <div>
        <span>
            count items left
        </span>
        <from>
            <label><input type="radio" name="todo-filter" value="All" group="filter-grp"></input>All</label>
            <label><input type="radio" name="todo-filter" value="Active" group="filter-grp"></input>Active</label>
            <label><input type="radio" name="todo-filter" value="Completed" group="filter-grp"></input>Completed</label>
        </from>
        <button>Clear completed</button>
    </div>
);

export default Footer;