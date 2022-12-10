import React from 'react'
import styles from './navBar.module.scss'

const NavBar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li className={styles.logo}>
                        <a href="#">
                            Pimp My Site <span className={styles.mini}></span>
                        </a>
                    </li>
                    <li>
                        <a  href="#">Services</a>
                    </li>
                    <li>
                        <a href="#">Skills</a>
                    </li>
                    <li>
                        <a href="#">Hit us up</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar
