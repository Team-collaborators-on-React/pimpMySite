import React, { useEffect } from "react";
import styles from './test.module.scss'

const Test = () => {

    return (
        <div className={styles.scroll_container}>
            <div className={styles.scroll_area}>1</div>
            <div className={styles.scroll_area}>2</div>
            <div className={styles.scroll_area}>3</div>
            <div className={styles.scroll_area}>4</div>
        </div>

    )
}

export default Test