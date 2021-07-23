import React from 'react'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import './searchbar.scss'

export default function Searchbar() {
    return (
        <div className="searchbar">
            <div className="searchbar-container">
                <SearchOutlinedIcon />
                <input type="text" placeholder="Search or start a new chat" />
            </div>
        </div>
    )
}
