import React from 'react'
import { Link } from 'react-router-dom'
import styles from './navBar.module.scss'

const NavBar = () => {
    return (
        <div className={styles.main}>
            <nav>
                
                <ul>
                    <li className={styles.logo}>
                        <Link to='/'>
                            Pimp My Site <span className={styles.mini}></span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/services'>
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link to="/skills">
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link to='/contactus'>
                            Hit us up
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar
