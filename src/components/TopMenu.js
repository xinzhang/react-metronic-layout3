import React, {Component} from 'react'
import DropdownList from './DropdownList';

const TopMenu = (props) => {
    return (
        <div className="top-menu">
            <ul className="nav navbar-nav pull-right">
                <DropdownList />
            </ul>
        </div>
)}

export default TopMenu;
