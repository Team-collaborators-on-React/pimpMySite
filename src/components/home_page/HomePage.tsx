import styles from './HomePage.module.scss'
import Layout from '../Layout/Layout'

const HomePage = () => {
    return (
        <>
            <div className={styles.main}>
                <Layout>
                    <div className={styles.rocket_wrapper}>
                    </div>
                    <div className={styles.logos_wrapper}>
                    </div>
                </Layout>
            </div>
        </>

    )
}

export default HomePage
