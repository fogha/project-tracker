import React from 'react';
import './nav.scss'
import user from '../../assets/user.jpg'

export default function Nav() {
    return (
        <div className="nav">
            <ul className='nav_left'>
                <li>Projects</li>
                <li>Users</li>
                <li>Repositories</li>
            </ul>

            <div className="nav_right">
                <img src={user} alt="" className='nav_image' />
                <p>Mathew Johnson</p>
            </div>
        </div>
    )
}
