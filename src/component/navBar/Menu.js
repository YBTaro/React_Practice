import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown'

function Menu({ item, menuClose }) {

    const [isDroppedDown, setIsDroppedDown] = useState(false)

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setIsDroppedDown(false)
        }
        else {
            setIsDroppedDown(true)
        }
    }

    const onMouseLeave = () => {
        setIsDroppedDown(false)
    }

    const closeDroppedDown = () => {
        setIsDroppedDown(false)
    }

    return (
        <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <Link onClick={menuClose} className={item.cName} to={item.url}> {item.title}</Link>
            {isDroppedDown && <Dropdown data={item.toggleList} closeDroppedDown={closeDroppedDown} />}
        </li>
    )
}

export default Menu
