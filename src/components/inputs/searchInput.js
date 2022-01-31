import React from 'react';
import './inputs.scss'
import searchIcon from '../../assets/search.svg'

export default function SearchInput({onchange}) {
    return (
        <div className="search">
            <img src={searchIcon} alt=""/>
            <input type="text" onChange={onchange} placeholder='Search...' />
        </div>
    )
}
