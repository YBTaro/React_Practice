import React from 'react'
import { Link } from 'react-router-dom'

function Dropdown(props) {
    const items = props.data
    return (
        <ul className="dropdown-ul">
            {
                items.map((item, index) => (
                    <li key={index}>
                        <Link onClick={props.closeDroppedDown} className={item.cName} to={item.url}>{item.title}</Link>
                    </li>
                ))
            }
        </ul>
    )
}

export default Dropdown
