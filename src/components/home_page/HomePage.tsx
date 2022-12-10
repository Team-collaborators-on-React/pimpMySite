import React from 'react'
import rocket from '../../assets/home_page_rocket.png'
import logos from '../../assets/home_page_logos.png'
import styles from './HomePage.module.scss'
import NavBar from '../navBar/NavBar'

const HomePage = () => {
    return (
        <>
        <div className={styles.main}>
            <NavBar/>
         <div className={styles.rocket_wrapper}>
         </div>
            <div className={styles.logos_wrapper}>
            </div>
        </div>
        </>
       
    )
}

export default HomePage
