import React from 'react';
import SearchInput from '../../components/inputs/searchInput';
import Nav from '../../components/nav/nav';
import './home.scss'

export default function Home() {
    return (
        <div className="home">
            <Nav />
            <div className="body">
                <div className="searchHolder">
                    <SearchInput />
                </div>
                
            </div>
        </div>
    )
}
