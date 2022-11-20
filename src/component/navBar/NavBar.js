import React, { Component } from 'react'
import { menuItems } from './MenuItems'
import { GiAtom } from 'react-icons/gi'
import { FaAlignLeft, FaTimes } from 'react-icons/fa'
import './NavBar.css'
import { Link } from 'react-router-dom'
import Modal from 'react-modal'
import Menu from './Menu'


Modal.setAppElement("#root")

export class NavBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            clicked: false
        }
    }

    toggleMenu = () => {
        this.setState((prev) => {
            return {
                clicked: !prev.clicked
            }
        })
    }

    menuClose = () => {
        this.setState({
            clicked: false
        })
    }


    render() {
        return (
            <>
                <nav className="navbar-items">
                    <h1>
                        <Link to="/" className="navbar-logo" onClick={this.menuClose}>
                            React<GiAtom className="logo" />
                        </Link>
                    </h1>

                    <button className="toggle-button" onClick={this.toggleMenu}>
                        {this.state.clicked ? <FaTimes /> : <FaAlignLeft />}
                    </button>

                    <ul className={this.state.clicked ? "active" : ""}>
                        {
                            menuItems.map((item, index) => {
                                return (
                                    <Menu key={index} item={item} menuClose={this.menuClose} />
                                )
                            })
                        }
                        <li>
                            <div className="logged-bar">
                                <div className="sayhello">Hello, ???</div>
                                <Link to="/LoginPage" className="login-button">Login</Link>
                                <Link to="/SignUpPage" className="signup-button">Sign Up</Link>
                            </div>
                        </li>
                    </ul>
                </nav>
            </>
        )
    }
}

export default NavBar
